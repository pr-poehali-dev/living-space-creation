import { useState } from "react";
import Icon from "@/components/ui/icon";
import { RevealBlock } from "@/components/shared/RevealBlock";

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

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 relative diagonal-clip-rev" style={{ background: "var(--dark-card)" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Наши работы</p>
            <h2 className="section-title text-5xl md:text-7xl" style={{ color: "hsl(25,25%,15%)" }}>
              Портфолио
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "hsl(25,15%,45%)" }}>
            Каждый объект — это история. Мы превращаем пространство в произведение искусства.
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO.map((p, i) => (
            <RevealBlock key={p.id} delay={i * 120} className="group card-hover">
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ border: "1px solid rgba(155,122,47,0.15)" }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: "brightness(0.9)" }}
                  />
                </div>
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(247,243,238,0.92) 30%, transparent 70%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="gold-line mb-4" />
                  <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                    {p.style} · {p.area}
                  </div>
                  <h3 className="font-display text-xl font-light" style={{ color: "hsl(25,25%,15%)" }}>
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
  );
}

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-32 relative" style={{ background: "var(--dark-bg)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <RevealBlock className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Почему мы</p>
          <h2 className="section-title text-5xl md:text-7xl" style={{ color: "hsl(25,25%,15%)" }}>
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
                  border: "1px solid rgba(155,122,47,0.15)",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(155,122,47,0.4)";
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 30px 60px rgba(100,80,40,0.12), 0 0 30px rgba(155,122,47,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(155,122,47,0.15)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 rounded-sm"
                  style={{ background: "rgba(155,122,47,0.08)", border: "1px solid rgba(155,122,47,0.2)" }}
                >
                  <Icon name={a.icon} fallback="Star" size={20} style={{ color: "var(--gold)" }} />
                </div>
                <div className="font-display text-5xl font-light mb-1" style={{ color: "var(--gold)" }}>
                  {a.num}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                  {a.label}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(25,15%,45%)" }}>
                  {a.desc}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section id="reviews" className="py-32 relative diagonal-clip" style={{ background: "var(--dark-card)" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <RevealBlock className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Что говорят клиенты</p>
          <h2 className="section-title text-5xl md:text-7xl" style={{ color: "hsl(25,25%,15%)" }}>
            Отзывы
          </h2>
        </RevealBlock>

        <RevealBlock>
          <div className="relative">
            <div
              className="p-10 md:p-14 rounded-sm"
              style={{
                background: "linear-gradient(145deg, #ede6db, #f7f3ee)",
                border: "1px solid rgba(155,122,47,0.2)",
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
                style={{ color: "hsl(25,25%,20%)" }}
              >
                «{REVIEWS[activeReview].text}»
              </blockquote>
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div>
                  <div className="font-semibold text-sm" style={{ color: "hsl(25,25%,20%)" }}>
                    {REVIEWS[activeReview].name}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "hsl(25,15%,50%)" }}>
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
                        background: i === activeReview ? "var(--gold)" : "rgba(155,122,47,0.25)",
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
                style={{ border: "1px solid rgba(155,122,47,0.25)", color: "var(--gold)", background: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(155,122,47,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Icon name="ChevronLeft" size={18} />
              </button>
              <button
                onClick={() => setActiveReview((activeReview + 1) % REVIEWS.length)}
                className="w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-300"
                style={{ border: "1px solid rgba(155,122,47,0.25)", color: "var(--gold)", background: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(155,122,47,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Icon name="ChevronRight" size={18} />
              </button>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

export function ContactsSection() {
  return (
    <section id="contacts" className="py-32 relative diagonal-clip-rev" style={{ background: "var(--dark-card)" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <RevealBlock className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Обсудим ваш проект</p>
          <h2 className="section-title text-5xl md:text-7xl mb-6" style={{ color: "hsl(25,25%,15%)" }}>
            Контакты
          </h2>
          <p className="text-base" style={{ color: "hsl(25,15%,45%)", maxWidth: 440, margin: "0 auto" }}>
            Оставьте заявку — перезвоним в течение 15 минут и ответим на все вопросы
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RevealBlock>
            <div
              className="p-10 rounded-sm"
              style={{
                background: "linear-gradient(145deg, #ede6db, #f7f3ee)",
                border: "1px solid rgba(155,122,47,0.2)",
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
                        border: "1px solid rgba(155,122,47,0.25)",
                        color: "hsl(25,25%,20%)",
                        fontFamily: "'Manrope', sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(155,122,47,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(155,122,47,0.25)")}
                    />
                  </div>
                ))}
                <button className="btn-gold w-full rounded-sm mt-4">
                  <span>Отправить заявку</span>
                </button>
                <p className="text-xs text-center" style={{ color: "hsl(25,15%,50%)" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock delay={200} className="flex flex-col justify-between gap-6">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (909) 448-77-70" },
              { icon: "Mail", label: "Email", value: "info@renovex.ru" },
              { icon: "MapPin", label: "Города", value: "Краснодар и Анапа" },
              { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–20:00, Сб: 10:00–17:00" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-5 p-5 rounded-sm"
                style={{ background: "rgba(155,122,47,0.05)", border: "1px solid rgba(155,122,47,0.15)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                  style={{ background: "rgba(155,122,47,0.1)" }}
                >
                  <Icon name={c.icon} fallback="Star" size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "hsl(25,15%,50%)" }}>
                    {c.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "hsl(25,25%,20%)" }}>
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12" style={{ background: "var(--dark-bg)", borderTop: "1px solid rgba(155,122,47,0.15)" }}>
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-xl font-light tracking-widest" style={{ color: "var(--gold)" }}>
          UM SOL
        </div>
        <p className="text-xs tracking-widest" style={{ color: "hsl(25,15%,50%)" }}>
          © 2024 UM SOL. Ремонт под ключ в Краснодаре и Анапе
        </p>
        <div className="flex gap-6">
          {["ВКонтакте", "Telegram", "WhatsApp"].map((s) => (
            <a key={s} href="#" className="text-xs tracking-widest uppercase nav-link" style={{ color: "hsl(25,15%,45%)" }}>
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
