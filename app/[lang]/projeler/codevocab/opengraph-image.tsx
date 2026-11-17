import { caseOg } from "@/lib/og";

export const alt = "CodeVocab, Marki Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return caseOg("codevocab");
}
