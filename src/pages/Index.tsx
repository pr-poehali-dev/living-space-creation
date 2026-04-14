import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PORTFOLIO = [
  {
    id: 1,
    title: "Апартаменты в Москве",
    area: "120 м²",
    style: "Современный минимализм",
    img: "https://cdn.poehali.dev/projects/ae6ea2a5-5e61-4357-b40f-1e597fc9aaa6/files/51e618c6-92bc-4bfe-af1a-b0e029772735.jpg",
  },
  {
    id: 2,
    title: "Кухня-студия",
    area: "45 м²",
    style: "Тёмный арт-деко",
    img: "https://cdn.poehali.dev/projects/ae6ea2a5-5e61-4357-b40f-1e597fc9aaa6/files/31006893-c6ce-406e-b5a6-b103df5e00b2.jpg",
  },
  {
    id: 3,
    title: "Мастер-ванная",
    area: "30 м²",
    style: "Люкс с камнем",
    img: "https://cdn.poehali.dev/projects/ae6ea2a5-5e61-4357-b40f-1e597fc9aaa6/files/24494aa8-f182-4a60-86cc-a838e0a36c96.jpg",
  },
];

const ADVANTAGES = [
  {
    icon: "Award",
    num: "15+",
    label: "лет опыта",
    desc: "Более 15 лет на рынке ремонта премиального жилья в Москве",
  },
  {
    icon: "Home",
    num: "500+",
    label: "объектов",
    desc: "Сдали более 500 объектов — от студий до пентхаусов",
  },
  {
    icon: "Clock",
    num: "100%",
    label: "в срок",
    desc: "Фиксированные сроки в договоре — без задержек и штрафов",
  },
  {
    icon: "Shield",
    num: "5 лет",
    label: "гарантия",
    desc: "Официальная гарантия на все виды работ и материалы",
  },
];

const REVIEWS = [
  {
    name: "Анастасия М.",
    role: "Владелица квартиры, ЖК «Москва-Сити»",
    text: "Сделали ремонт в 180 м² за 4 месяца. Всё точно по проекту, ни одной задержки. Результат превзошёл ожидания — каждый гость спрашивает, кто делал дизайн.",
    stars: 5,
  },
  {
    name: "Дмитрий К.",
    role: "Инвестор, 3 объекта под сдачу",
    text: "Работаем уже второй год. Ребята делают ремонт «под ключ» с идеальным соотношением цена-качество. Квартиры сдаются выше рынка именно за счёт их работы.",
    stars: 5,
  },
  {
    name: "Елена В.",
    role: "Частный клиент, Рублёвка",
    text: "Загородный дом 350 м². Я боялась хаоса на стройке, но всё было организовано идеально. Все коммуникации в одном месте, смета не выросла ни на рубль.",
    stars: 5,
  },
];

const CALC_ROOMS = [
  { id: "studio", label: "Студия", base: 25 },
  { id: "1room", label: "1-комнатная", base: 40 },
  { id: "2room", label: "2-комнатная", base: 65 },
  { id: "3room", label: "3-комнатная", base: 90 },
  { id: "house", label: "Частный дом", base: 150 },
];

const CALC_LEVELS = [
  { id: "economy", label: "Эконом", pricePerM: 18000 },
  { id: "standard", label: "Стандарт", pricePerM: 28000 },
  { id: "premium", label: "Премиум", pricePerM: 45000 },
  { id: "luxury", label: "Люкс", pricePerM: 75000 },
];

function RevealBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Calculator() {
  const [room, setRoom] = useState("2room");
  const [area, setArea] = useState(65);
  const [level, setLevel] = useState("standard");
  const [materials, setMaterials] = useState(true);
  const [design, setDesign] = useState(false);

  const selectedLevel = CALC_LEVELS.find((l) => l.id === level)!;

  const workCost = area * selectedLevel.pricePerM;
  const materialsCost = materials ? workCost * 0.6 : 0;
  const designCost = design ? area * 3500 : 0;
  const total = workCost + materialsCost + designCost;

  const fmt = (n: number) =>
    new Intl.NumberFormat("ru-RU").format(Math.round(n));

  return (
    <section id="calculator" className="py-32 relative" style={{ background: "var(--dark-bg)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <RevealBlock className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Онлайн-расчёт
          </p>
          <h2 className="section-title text-5xl md:text-7xl mb-6" style={{ color: "hsl(45, 30%, 90%)" }}>
            Калькулятор<br />
            <span className="gold-gradient">стоимости</span>
          </h2>
          <p className="text-base" style={{ color: "hsl(30, 15%, 55%)", maxWidth: 440, margin: "0 auto" }}>
            Предварительный расчёт за 30 секунд — без звонков и ожидания
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <RevealBlock className="space-y-6">
            <div className="calc-card p-8 rounded-sm">
              <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "var(--gold)" }}>
                Тип объекта
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {CALC_ROOMS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => { setRoom(r.id); setArea(r.base); }}
                    className="py-3 px-4 text-sm transition-all duration-300 rounded-sm"
                    style={{
                      background: room === r.id ? "var(--gold)" : "rgba(201,168,76,0.05)",
                      color: room === r.id ? "var(--dark-bg)" : "hsl(45, 30%, 70%)",
                      border: room === r.id ? "1px solid var(--gold)" : "1px solid rgba(201,168,76,0.15)",
                      fontWeight: room === r.id ? 600 : 400,
                    }}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-card p-8 rounded-sm">
              <div className="flex justify-between items-center mb-5">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                  Площадь
                </p>
                <span className="font-display text-3xl" style={{ color: "hsl(45,30%,90%)" }}>
                  {area} <span className="text-base font-body" style={{ color: "var(--gold)" }}>м²</span>
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={500}
                value={area}
                onChange={(e) => setArea(+e.target.value)}
                className="range-gold w-full"
              />
              <div className="flex justify-between mt-2 text-xs" style={{ color: "hsl(30,15%,45%)" }}>
                <span>15 м²</span>
                <span>500 м²</span>
              </div>
            </div>

            <div className="calc-card p-8 rounded-sm">
              <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "var(--gold)" }}>
                Уровень отделки
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {CALC_LEVELS.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLevel(l.id)}
                    className="py-3 px-2 text-xs transition-all duration-300 rounded-sm"
                    style={{
                      background: level === l.id ? "var(--gold)" : "rgba(201,168,76,0.05)",
                      color: level === l.id ? "var(--dark-bg)" : "hsl(45, 30%, 70%)",
                      border: level === l.id ? "1px solid var(--gold)" : "1px solid rgba(201,168,76,0.15)",
                      fontWeight: level === l.id ? 600 : 400,
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-card p-8 rounded-sm">
              <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "var(--gold)" }}>
                Дополнительно
              </p>
              <div className="space-y-4">
                {[
                  { val: materials, set: setMaterials, label: "Закупка материалов", sub: `≈ ${fmt(area * selectedLevel.pricePerM * 0.6)} ₽` },
                  { val: design, set: setDesign, label: "Дизайн-проект", sub: `≈ ${fmt(area * 3500)} ₽` },
                ].map((opt) => (
                  <label key={opt.label} className="flex items-center gap-4 cursor-pointer">
                    <div
                      onClick={() => opt.set(!opt.val)}
                      className="w-5 h-5 flex-shrink-0 rounded-sm transition-all duration-300 flex items-center justify-center"
                      style={{
                        background: opt.val ? "var(--gold)" : "transparent",
                        border: opt.val ? "2px solid var(--gold)" : "2px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      {opt.val && <Icon name="Check" size={12} style={{ color: "var(--dark-bg)" }} />}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm" style={{ color: "hsl(45,30%,80%)" }}>{opt.label}</span>
                      <span className="ml-3 text-xs" style={{ color: "hsl(30,15%,45%)" }}>{opt.sub}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </RevealBlock>

          <RevealBlock delay={200} className="lg:sticky lg:top-8">
            <div
              className="rounded-sm p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #1C1610, #0D0A07)",
                border: "1px solid rgba(201,168,76,0.3)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 0 60px rgba(201,168,76,0.03)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
              />

              <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "var(--gold)" }}>
                Предварительная смета
              </p>

              <div className="space-y-1 mb-8">
                <div className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  <span className="text-sm" style={{ color: "hsl(30,15%,55%)" }}>Ремонтные работы</span>
                  <span className="font-body font-semibold text-sm" style={{ color: "hsl(45,30%,85%)" }}>
                    {fmt(workCost)} ₽
                  </span>
                </div>
                {materials && (
                  <div className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                    <span className="text-sm" style={{ color: "hsl(30,15%,55%)" }}>Материалы</span>
                    <span className="font-body font-semibold text-sm" style={{ color: "hsl(45,30%,85%)" }}>
                      {fmt(materialsCost)} ₽
                    </span>
                  </div>
                )}
                {design && (
                  <div className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                    <span className="text-sm" style={{ color: "hsl(30,15%,55%)" }}>Дизайн-проект</span>
                    <span className="font-body font-semibold text-sm" style={{ color: "hsl(45,30%,85%)" }}>
                      {fmt(designCost)} ₽
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end mb-10">
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "hsl(30,15%,50%)" }}>
                  Итого от
                </span>
                <div className="text-right">
                  <div className="font-display font-light" style={{ fontSize: "3rem", lineHeight: 1, color: "var(--gold-light)" }}>
                    {fmt(total)}
                  </div>
                  <div className="text-sm mt-1" style={{ color: "hsl(30,15%,50%)" }}>₽ включая НДС</div>
                </div>
              </div>

              <div className="text-xs mb-8 p-4 rounded-sm" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)", color: "hsl(30,15%,50%)" }}>
                Расчёт предварительный. Точная смета составляется после замера объекта — бесплатно.
              </div>

              <button className="btn-gold w-full rounded-sm">
                <span>Получить точную смету</span>
              </button>
              <button className="btn-outline-gold w-full rounded-sm mt-3">
                Записаться на замер
              </button>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "var(--dark-bg)", minHeight: "100vh", fontFamily: "'Manrope', sans-serif" }}>

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
            {[
              { id: "portfolio", label: "Портфолио" },
              { id: "advantages", label: "Преимущества" },
              { id: "reviews", label: "Отзывы" },
              { id: "calculator", label: "Калькулятор" },
              { id: "contacts", label: "Контакты" },
            ].map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="nav-link text-xs tracking-[0.15em] uppercase"
                style={{ color: "hsl(30,15%,60%)" }}
              >
                {n.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("contacts")}
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
            {[
              { id: "portfolio", label: "Портфолио" },
              { id: "advantages", label: "Преимущества" },
              { id: "reviews", label: "Отзывы" },
              { id: "calculator", label: "Калькулятор" },
              { id: "contacts", label: "Контакты" },
            ].map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
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
                Ремонт в Москве и МО
              </div>
              <h1 className="section-title text-5xl md:text-7xl xl:text-8xl mb-8 leading-none" style={{ color: "hsl(45,30%,92%)" }}>
                Создаём<br />
                <span className="italic gold-gradient">интерьеры</span><br />
                мечты
              </h1>
              <p className="text-base leading-relaxed mb-12" style={{ color: "hsl(30,15%,55%)", maxWidth: 440 }}>
                Ремонт под ключ — от дизайн-проекта до финального клининга. Сдаём в срок, гарантируем качество 5 лет.
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

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 relative diagonal-clip-rev" style={{ background: "var(--dark-card)" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Наши работы</p>
              <h2 className="section-title text-5xl md:text-7xl" style={{ color: "hsl(45,30%,90%)" }}>
                Портфолио
              </h2>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "hsl(30,15%,50%)" }}>
              Каждый объект — это история. Мы превращаем пространство в произведение искусства.
            </p>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <RevealBlock key={p.id} delay={i * 120} className="group card-hover">
                <div
                  className="relative overflow-hidden rounded-sm"
                  style={{ border: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ filter: "brightness(0.8)" }}
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,10,7,0.9) 30%, transparent 70%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="gold-line mb-4" />
                    <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                      {p.style} · {p.area}
                    </div>
                    <h3 className="font-display text-xl font-light" style={{ color: "hsl(45,30%,92%)" }}>
                      {p.title}
                    </h3>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>

          <RevealBlock className="text-center mt-16">
            <button className="btn-outline-gold rounded-sm">
              Смотреть все проекты
            </button>
          </RevealBlock>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-32 relative" style={{ background: "var(--dark-bg)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
        </div>

        <div className="container mx-auto px-6 max-w-7xl">
          <RevealBlock className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Почему мы</p>
            <h2 className="section-title text-5xl md:text-7xl" style={{ color: "hsl(45,30%,90%)" }}>
              Преимущества
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a, i) => (
              <RevealBlock key={a.label} delay={i * 100}>
                <div
                  className="p-8 rounded-sm h-full"
                  style={{
                    background: "var(--dark-card)",
                    border: "1px solid rgba(201,168,76,0.1)",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(201,168,76,0.4)";
                    el.style.transform = "translateY(-8px)";
                    el.style.boxShadow = "0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(201,168,76,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(201,168,76,0.1)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 rounded-sm"
                    style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <Icon name={a.icon} fallback="Star" size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <div className="font-display text-5xl font-light mb-1" style={{ color: "var(--gold-light)" }}>
                    {a.num}
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                    {a.label}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(30,15%,50%)" }}>
                    {a.desc}
                  </p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-32 relative diagonal-clip" style={{ background: "var(--dark-card)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <RevealBlock className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Что говорят клиенты</p>
            <h2 className="section-title text-5xl md:text-7xl" style={{ color: "hsl(45,30%,90%)" }}>
              Отзывы
            </h2>
          </RevealBlock>

          <RevealBlock>
            <div className="relative">
              <div
                className="p-10 md:p-14 rounded-sm"
                style={{
                  background: "linear-gradient(145deg, #1C1610, #0D0A07)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  minHeight: 280,
                }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(REVIEWS[activeReview].stars)].map((_, i) => (
                    <span key={i} style={{ color: "var(--gold)", fontSize: 18 }}>★</span>
                  ))}
                </div>
                <blockquote
                  className="font-display text-2xl md:text-3xl font-light italic leading-relaxed mb-10"
                  style={{ color: "hsl(45,30%,85%)" }}
                >
                  «{REVIEWS[activeReview].text}»
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "hsl(45,30%,80%)" }}>
                      {REVIEWS[activeReview].name}
                    </div>
                    <div className="text-xs mt-1" style={{ color: "hsl(30,15%,45%)" }}>
                      {REVIEWS[activeReview].role}
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    {REVIEWS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveReview(i)}
                        style={{
                          width: i === activeReview ? 32 : 10,
                          height: 4,
                          borderRadius: 2,
                          background: i === activeReview ? "var(--gold)" : "rgba(201,168,76,0.25)",
                          transition: "all 0.3s",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setActiveReview((activeReview - 1 + REVIEWS.length) % REVIEWS.length)}
                  className="w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-300"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", color: "var(--gold)", background: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <Icon name="ChevronLeft" size={18} />
                </button>
                <button
                  onClick={() => setActiveReview((activeReview + 1) % REVIEWS.length)}
                  className="w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-300"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", color: "var(--gold)", background: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <Icon name="ChevronRight" size={18} />
                </button>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* CALCULATOR */}
      <Calculator />

      {/* CONTACTS */}
      <section id="contacts" className="py-32 relative diagonal-clip-rev" style={{ background: "var(--dark-card)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <RevealBlock className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Обсудим ваш проект</p>
            <h2 className="section-title text-5xl md:text-7xl mb-6" style={{ color: "hsl(45,30%,90%)" }}>
              Контакты
            </h2>
            <p className="text-base" style={{ color: "hsl(30,15%,50%)", maxWidth: 440, margin: "0 auto" }}>
              Оставьте заявку — перезвоним в течение 15 минут и ответим на все вопросы
            </p>
          </RevealBlock>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <RevealBlock>
              <div
                className="p-10 rounded-sm"
                style={{
                  background: "linear-gradient(145deg, #1C1610, #0D0A07)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <div className="space-y-6">
                  {[
                    { label: "Имя", placeholder: "Ваше имя" },
                    { label: "Телефон", placeholder: "+7 (___) ___-__-__" },
                    { label: "Тип объекта", placeholder: "Квартира, дом, офис..." },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-xs tracking-[0.2em] uppercase block mb-2" style={{ color: "var(--gold)" }}>
                        {f.label}
                      </label>
                      <input
                        placeholder={f.placeholder}
                        className="w-full bg-transparent py-3 px-4 text-sm outline-none transition-all duration-300 rounded-sm"
                        style={{
                          border: "1px solid rgba(201,168,76,0.2)",
                          color: "hsl(45,30%,80%)",
                          fontFamily: "'Manrope', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
                      />
                    </div>
                  ))}
                  <button className="btn-gold w-full rounded-sm mt-4">
                    <span>Отправить заявку</span>
                  </button>
                  <p className="text-xs text-center" style={{ color: "hsl(30,15%,35%)" }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </RevealBlock>

            <RevealBlock delay={200} className="flex flex-col justify-between gap-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                { icon: "Mail", label: "Email", value: "info@renovex.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Арбат, 1" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–20:00, Сб: 10:00–17:00" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-5 p-5 rounded-sm"
                  style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <Icon name={c.icon} fallback="Star" size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "hsl(30,15%,45%)" }}>
                      {c.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "hsl(45,30%,80%)" }}>
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ background: "var(--dark-bg)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-light tracking-widest" style={{ color: "var(--gold)" }}>
            UM SOL
          </div>
          <p className="text-xs tracking-widest" style={{ color: "hsl(30,15%,35%)" }}>
            © 2024 UM SOL. Ремонт под ключ в Москве
          </p>
          <div className="flex gap-6">
            {["ВКонтакте", "Telegram", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="text-xs tracking-widest uppercase nav-link" style={{ color: "hsl(30,15%,45%)" }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}