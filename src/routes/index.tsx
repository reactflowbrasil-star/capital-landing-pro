import { createFileRoute } from "@tanstack/react-router";

import logoWhite from "@/assets/logo-white.png.asset.json";
import k3d from "@/assets/k-3d.png.asset.json";
import rocket from "@/assets/rocket.png.asset.json";
import teamWoman from "@/assets/team-woman.png.asset.json";
import brasilMap from "@/assets/brasil-map.png.asset.json";
import cristiomar from "@/assets/cristiomar.png.asset.json";
import joao from "@/assets/joao.png.asset.json";
import emilly from "@/assets/emilly.png.asset.json";
import alexandre from "@/assets/alexandre.png.asset.json";
import andrey from "@/assets/andrey.png.asset.json";
import matheus from "@/assets/matheus.png.asset.json";
import eliezer from "@/assets/eliezer.png.asset.json";
import arlindomar from "@/assets/arlindomar.png.asset.json";
import victor from "@/assets/victor.png.asset.json";
import angelica from "@/assets/angelica.png.asset.json";
import francine from "@/assets/francine.png.asset.json";
import jullyana from "@/assets/jullyana.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapital Agência | A eleição de 2026 se ganha no digital" },
      {
        name: "description",
        content:
          "Agência de marketing político digital de alta performance: estratégia, dados e execução para transformar pré-candidatos em protagonistas eleitorais.",
      },
      { property: "og:title", content: "Kapital Agência | Marketing político digital" },
      {
        property: "og:description",
        content:
          "+600 campanhas, 21 estados e 15 anos de experiência transformando influência em voto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const summary = [
  "Quem somos",
  "Nossos Resultados",
  "Time de Experts",
  "Ecossistema de Ferramentas",
  "Nossa Metodologia",
  "Planos e Pacotes",
];

const pillars = [
  {
    title: "Missão",
    body: (
      <>
        Transformar campanhas por meio da tecnologia e da inteligência de dados, tornando o{" "}
        <strong className="font-bold">marketing político profissional</strong>, mensurável e
        acessível para que a melhor mensagem chegue ao eleitor certo, na hora certa.
      </>
    ),
  },
  {
    title: "Visão",
    body: (
      <>
        Ser referência nacional em marketing político digital, reconhecida por unir{" "}
        <strong className="font-bold">criatividade</strong>,{" "}
        <strong className="font-bold">tecnologia</strong> e resultado em cada campanha que
        assumimos.
      </>
    ),
  },
  {
    title: "Princípios",
    body: (
      <>
        Aqui não existe achismo: existe <strong className="font-bold">método</strong> e{" "}
        <strong className="font-bold">resultado</strong>. Prezamos por transparência,
        performance e compromisso com cada candidatura, entregando excelência do diagnóstico
        à urna. <strong className="font-bold">Sempre entregamos o que prometemos!</strong>
      </>
    ),
  },
];

const stats = [
  { value: "21", label: "Estados de atuação", tone: "green" },
  { value: "15 anos", label: "De experiência", tone: "blue" },
  { value: "+600", label: "Campanhas", tone: "green" },
  { value: "+14 milhões", label: "Em gerenciamento", tone: "blue" },
];

const experts = [
  { img: cristiomar.url, name: "Cristiomar Silva", role: "Publicitário / Neuromarketing" },
  { img: joao.url, name: "João Gabriel", role: "Head de Tráfego Pago" },
  { img: emilly.url, name: "Emilly Moreira", role: "Gestora Comercial" },
  { img: alexandre.url, name: "Alexandre Lima", role: "Diretor Executivo de Arte" },
  { img: andrey.url, name: "Andrey Camargo", role: "Head de Inteligência Artificial" },
  { img: matheus.url, name: "Matheus Fogaça", role: "Redator e Jornalista" },
  { img: eliezer.url, name: "Eliezer Marra", role: "Diretor de Rádio e TV" },
  { img: arlindomar.url, name: "Arlindomar Silva", role: "Head de Design de Web" },
  { img: victor.url, name: "Victor Costa", role: "Engenheiro de Software" },
  { img: angelica.url, name: "Angélica Maria", role: "Diretora de Pesquisa de Mercado" },
  { img: francine.url, name: "Francine Góes", role: "Diretora de Projetos" },
  { img: jullyana.url, name: "Jullyana Costa", role: "Diretora de Conteúdo" },
];

function Landing() {
  return (
    <main className="overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="kap-hero-gradient relative isolate min-h-[92vh] overflow-hidden">
        <div
          className="pointer-events-none absolute -left-24 top-40 h-72 w-72 bg-kap-lime opacity-90"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-96 w-[38rem] bg-kap-cyan/90"
          style={{ clipPath: "polygon(0 30%, 70% 0, 100% 60%, 30% 100%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-10 h-80 w-[34rem] bg-kap-lime"
          style={{ clipPath: "polygon(0 35%, 65% 0, 100% 55%, 35% 100%)" }}
          aria-hidden
        />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <img src={logoWhite.url} alt="Kapital Agência" className="h-10 w-auto" />
          <span className="rounded-full bg-kap-lime px-5 py-2 text-sm font-extrabold tracking-[0.2em] text-kap-navy-deep">
            ELEIÇÃO | 2026
          </span>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-24 pt-6 md:grid-cols-2">
          <img
            src={k3d.url}
            alt="Símbolo tridimensional da Kapital"
            className="mx-auto w-full max-w-md md:order-1"
            loading="lazy"
          />
          <div className="md:order-2 md:text-right">
            <h1 className="font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              A ELEIÇÃO DE{" "}
              <span className="font-bold">2026</span> SE GANHA NO{" "}
              <span className="font-bold">DIGITAL.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 md:ml-auto md:max-w-md">
              Estratégia, dados e execução de alta performance para transformar pré-candidatos
              em protagonistas eleitorais.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 md:justify-end">
              <a
                href="#contato"
                className="rounded-full bg-kap-green px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Falar com um especialista
              </a>
              <a
                href="#quem-somos"
                className="rounded-full border border-white/40 px-8 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Conhecer a Kapital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUMÁRIO */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <img
            src={rocket.url}
            alt="Foguete ilustrando o crescimento das campanhas"
            className="mx-auto w-full max-w-md"
            loading="lazy"
          />
          <div>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Conteúdo da Apresentação
            </h2>
            <ul className="mt-10 space-y-0">
              {summary.map((item, i) => (
                <li key={item} className="flex items-stretch">
                  <span className="flex w-14 items-center justify-center bg-kap-lime font-display text-xl font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="flex flex-1 items-center border-b border-white/10 px-6 py-4 font-display text-xl text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="relative overflow-hidden bg-background">
        <div className="grid lg:grid-cols-2">
          <div className="relative bg-kap-lime px-6 py-20 lg:px-16">
            <h2 className="font-display text-5xl font-bold text-kap-blue sm:text-6xl">
              Quem somos
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-kap-navy-deep">
              A <strong className="font-extrabold">Kapital</strong> é uma agência de marketing
              digital e político de alta performance, dedicada a transformar pré-candidatos em
              protagonistas eleitorais. Unimos estratégia, dados e execução para construir
              posicionamento, controlar narrativa e converter influência em voto.
            </p>
            <img
              src={teamWoman.url}
              alt="Profissional da equipe Kapital"
              className="mt-10 w-full max-w-sm lg:absolute lg:-right-24 lg:bottom-0 lg:mt-0"
              loading="lazy"
            />
          </div>
          <div className="space-y-10 px-6 py-20 lg:px-16">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-kap-green">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-kap-navy">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="kap-hero-gradient relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              <span className="text-kap-cyan font-bold">Resultado</span> que se espalha pelo
              Brasil
            </h2>
            <p className="mt-6 leading-relaxed text-white/75">
              A <strong className="font-bold text-white">Kapital</strong> construiu sua
              trajetória transformando campanhas em vitórias de norte a sul do país. Levamos
              estratégia, tecnologia e execução de alta performance para onde a eleição
              acontece, provando que método e dados constroem resultado em qualquer praça.
            </p>
          </div>
          <img
            src={brasilMap.url}
            alt="Mapa do Brasil com a presença nacional da Kapital"
            className="w-full lg:col-span-1"
            loading="lazy"
          />
          <div className="grid gap-4 lg:col-span-1">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`px-6 py-5 ${
                  s.tone === "green" ? "bg-kap-green" : "bg-kap-blue"
                }`}
              >
                <p className="font-display text-4xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/90">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section id="experts" className="relative overflow-hidden bg-background py-24">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-kap-cyan/80"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 60%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-1/4 h-96 w-20 bg-kap-green/80"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 50%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="font-display text-5xl font-bold text-kap-navy sm:text-6xl">
              Nossos Experts
            </h2>
            <p className="text-lg leading-relaxed text-kap-navy/80">
              Investir pesado em tecnologia e qualificação está no DNA da{" "}
              <strong className="font-extrabold">Kapital</strong>. Afinal, ferramentas se
              compram — mas o nosso maior patrimônio é, e sempre será, o nosso time.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {experts.map((e) => (
              <figure key={e.name} className="text-center">
                <img
                  src={e.img}
                  alt={`${e.name}, ${e.role}`}
                  className="mx-auto aspect-square w-full max-w-[10rem] rounded-full object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-4">
                  <span className="block font-display font-bold text-kap-cyan">{e.name}</span>
                  <span className="mt-1 block text-xs uppercase tracking-wide text-kap-navy/70">
                    {e.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <footer id="contato" className="bg-kap-navy-deep py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Vamos ganhar <span className="font-bold text-kap-lime">2026</span> juntos.
          </h2>
          <p className="mt-5 text-white/70">
            Fale com a nossa equipe e receba um diagnóstico digital da sua pré-candidatura.
          </p>
          <a
            href="mailto:contato@kapitalagencia.com.br"
            className="mt-8 inline-block rounded-full bg-kap-green px-10 py-4 font-bold text-white transition hover:opacity-90"
          >
            Falar com a Kapital
          </a>
          <img
            src={logoWhite.url}
            alt="Kapital Agência"
            className="mx-auto mt-14 h-10 w-auto"
            loading="lazy"
          />
        </div>
      </footer>
    </main>
  );
}
