import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Footer() {
  const wa = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;
  return (
    <footer className="border-t border-white/10 bg-ink-950/40">
      <Container className="py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-white">{site.name}</p>
            <p className="mt-1 text-sm text-white/60">{site.title}</p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a className="rounded-xl px-3 py-2 text-white/70 transition hover:bg-white/5 hover:text-white" href={`tel:${site.phone}`}>Call</a>
            <a className="rounded-xl px-3 py-2 text-white/70 transition hover:bg-white/5 hover:text-white" href={`mailto:${site.email}`}>Email</a>
            <a className="rounded-xl px-3 py-2 text-white/70 transition hover:bg-white/5 hover:text-white" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <p className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
