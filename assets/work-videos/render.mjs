// Kullanım: node render.mjs <scene.html> <cikti_klasoru> <saniye>
// Sahnedeki tüm CSS animasyonlarını durdurur, her kare için zamanı elle ayarlayıp ekran görüntüsü alır (takılmasız).
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const [, , html, outDir, secArg] = process.argv;
const FPS = 30, W = 1600, H = 1000, total = Math.round(Number(secArg) * FPS);
fs.mkdirSync(outDir, { recursive: true });
const profile = fs.mkdtempSync("/private/tmp/claude-501/-Users-whyasaf-Desktop-whyasaf-root-marki-labs/f4e07c82-1113-4c63-b594-5fe08a2096f1/scratchpad/prof-");
const port = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
  `--remote-debugging-port=${port}`, `--window-size=${W},${H}`, `--user-data-dir=${profile}`, "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets;
for (let i = 0; i < 50; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); break; } catch { await sleep(200); } }
const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evaluate = async (expr) => (await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result?.result?.value;

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "file://" + path.resolve(html) });
await sleep(1500);
await evaluate("document.fonts.ready.then(() => Promise.all([...document.images].map(i => i.decode().catch(()=>{})))).then(() => true)");
await evaluate("document.getAnimations().forEach(a => a.pause()), true");

for (let f = 0; f < total; f++) {
  const t = (f / FPS) * 1000;
  await evaluate(`document.getAnimations().forEach(a => { a.currentTime = ${t}; }), true`);
  const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 92 });
  fs.writeFileSync(`${outDir}/f${String(f).padStart(4, "0")}.jpg`, Buffer.from(shot.result.data, "base64"));
}
console.log("kare:", total);
ws.close(); chrome.kill(); await sleep(1200);
try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
