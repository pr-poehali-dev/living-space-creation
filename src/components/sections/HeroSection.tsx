import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export function HeroSection({ scrollTo }: HeroSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  const NAV_LINKS = [
    { id: "portfolio", label: "Портфолио" },
    { id: "advantages", label: "Преимущества" },
    { id: "reviews", label: "Отзывы" },
    { id: "calculator", label: "Калькулятор" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13,10,7,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between max-w-7xl">
          <a href="#" className="font-display text-2xl font-light tracking-widest" style={{ color: "var(--gold)" }}>
            UM SOL
          </a>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((n) => (
              <button
                key={n.id}
                onClick={() => handleScrollTo(n.id)}
                className="nav-link text-xs tracking-[0.15em] uppercase"
                style={{ color: "hsl(30,15%,60%)" }}
              >
                {n.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleScrollTo("contacts")}
            className="hidden md:block btn-gold rounded-sm text-xs px-6 py-3"
          >
            <span>Связаться</span>
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--gold)" }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-6 px-6 space-y-4" style={{ background: "rgba(13,10,7,0.98)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
            {NAV_LINKS.map((n) => (
              <button
                key={n.id}
                onClick={() => handleScrollTo(n.id)}
                className="block w-full text-left py-2 text-sm tracking-widest uppercase"
                style={{ color: "hsl(45,30%,70%)" }}
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden diagonal-clip"
        style={{ background: "linear-gradient(135deg, #0A0806 0%, #1a1208 50%, #0D0A07 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute"
            style={{
              top: "10%", right: "5%", width: "45vw", height: "45vw",
              background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            className="absolute"
            style={{
              bottom: "20%", left: "-10%", width: "30vw", height: "30vw",
              background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                left: `${(i + 1) * 12.5}%`,
                width: "1px",
                background: "rgba(201,168,76,0.04)",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 max-w-7xl pt-32 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-block mb-8 px-4 py-2 text-xs tracking-[0.3em] uppercase"
                style={{ border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)" }}
              >
                Ремонт в Краснодаре и Анапе
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl mb-8 leading-none" style={{ color: "hsl(45,30%,92%)", fontFamily: "'Playfair Display', serif", fontWeight: 400, letterSpacing: "0.02em" }}>
                Система, где<br />
                <span className="italic gold-gradient">комфорт</span> —<br />
                это результат,<br />
                а не случайность
              </h1>
              <p className="text-base leading-relaxed mb-12" style={{ color: "hsl(30,15%,55%)", maxWidth: 440 }}>
                Опыт нашей команды — более 100 реализованных объектов в Краснодаре. Постоянные мастера и стандарты на каждом этапе — чтобы результат был предсказуемым с первого дня.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo("calculator")} className="btn-gold rounded-sm">
                  <span>Рассчитать стоимость</span>
                </button>
                <button onClick={() => scrollTo("portfolio")} className="btn-outline-gold rounded-sm">
                  Смотреть работы
                </button>
              </div>
              <div className="flex gap-12 mt-14">
                {[["500+", "Объектов"], ["15", "Лет опыта"], ["5 лет", "Гарантия"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl font-light" style={{ color: "var(--gold-light)" }}>{n}</div>
                    <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "hsl(30,15%,45%)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div
                className="relative rounded-sm overflow-hidden float-anim"
                style={{
                  height: "520px",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "0 60px 100px rgba(0,0,0,0.7), 0 0 60px rgba(201,168,76,0.05)",
                }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/ae6ea2a5-5e61-4357-b40f-1e597fc9aaa6/files/51e618c6-92bc-4bfe-af1a-b0e029772735.jpg"
                  alt="Luxury interior"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(13,10,7,0.7) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Апартаменты · Москва</div>
                  <div className="font-display text-xl font-light" style={{ color: "hsl(45,30%,90%)" }}>Современный минимализм</div>
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 w-24 h-24 pointer-events-none"
                style={{ border: "1px solid rgba(201,168,76,0.3)", borderBottom: "none", borderLeft: "none" }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none"
                style={{ border: "1px solid rgba(201,168,76,0.3)", borderTop: "none", borderRight: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>Scroll</div>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>
      </section>
    </>
  );
}