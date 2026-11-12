import { Container, Label, Pill } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center gap-8 pb-20 pt-20">
      <Label className="text-muted">404</Label>
      <h1 className="text-[clamp(44px,7vw,104px)] font-medium leading-none tracking-[-0.05em]">Bu sayfa henüz yok.</h1>
      <Pill href="/">Ana sayfaya dön</Pill>
    </Container>
  );
}
