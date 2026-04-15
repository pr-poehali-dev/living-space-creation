import { useState } from "react";
import Icon from "@/components/ui/icon";
import { RevealBlock } from "@/components/shared/RevealBlock";

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

export function Calculator() {
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
          <h2 className="section-title text-5xl md:text-7xl mb-6" style={{ color: "hsl(25, 25%, 15%)" }}>
            Калькулятор<br />
            <span className="gold-gradient">стоимости</span>
          </h2>
          <p className="text-base" style={{ color: "hsl(25, 15%, 45%)", maxWidth: 440, margin: "0 auto" }}>
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
                      background: room === r.id ? "var(--gold)" : "rgba(155,122,47,0.06)",
                      color: room === r.id ? "#fff" : "hsl(25, 20%, 30%)",
                      border: room === r.id ? "1px solid var(--gold)" : "1px solid rgba(155,122,47,0.2)",
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
                <span className="font-display text-3xl" style={{ color: "hsl(25,25%,15%)" }}>
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
              <div className="flex justify-between mt-2 text-xs" style={{ color: "hsl(25,15%,50%)" }}>
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
                      background: level === l.id ? "var(--gold)" : "rgba(155,122,47,0.06)",
                      color: level === l.id ? "#fff" : "hsl(25, 20%, 30%)",
                      border: level === l.id ? "1px solid var(--gold)" : "1px solid rgba(155,122,47,0.2)",
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
                        border: opt.val ? "2px solid var(--gold)" : "2px solid rgba(155,122,47,0.3)",
                      }}
                    >
                      {opt.val && <Icon name="Check" size={12} style={{ color: "#fff" }} />}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm" style={{ color: "hsl(25,20%,30%)" }}>{opt.label}</span>
                      <span className="ml-3 text-xs" style={{ color: "hsl(25,15%,50%)" }}>{opt.sub}</span>
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
                background: "linear-gradient(145deg, #ede6db, #f7f3ee)",
                border: "1px solid rgba(155,122,47,0.3)",
                boxShadow: "0 40px 80px rgba(100,80,40,0.12), inset 0 0 60px rgba(155,122,47,0.03)",
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
                <div className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid rgba(155,122,47,0.12)" }}>
                  <span className="text-sm" style={{ color: "hsl(25,15%,45%)" }}>Ремонтные работы</span>
                  <span className="font-body font-semibold text-sm" style={{ color: "hsl(25,25%,15%)" }}>
                    {fmt(workCost)} ₽
                  </span>
                </div>
                {materials && (
                  <div className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid rgba(155,122,47,0.12)" }}>
                    <span className="text-sm" style={{ color: "hsl(25,15%,45%)" }}>Материалы</span>
                    <span className="font-body font-semibold text-sm" style={{ color: "hsl(25,25%,15%)" }}>
                      {fmt(materialsCost)} ₽
                    </span>
                  </div>
                )}
                {design && (
                  <div className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid rgba(155,122,47,0.12)" }}>
                    <span className="text-sm" style={{ color: "hsl(25,15%,45%)" }}>Дизайн-проект</span>
                    <span className="font-body font-semibold text-sm" style={{ color: "hsl(25,25%,15%)" }}>
                      {fmt(designCost)} ₽
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end mb-10">
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "hsl(25,15%,50%)" }}>
                  Итого от
                </span>
                <div className="text-right">
                  <div className="font-display font-light" style={{ fontSize: "3rem", lineHeight: 1, color: "var(--gold)" }}>
                    {fmt(total)}
                  </div>
                  <div className="text-sm mt-1" style={{ color: "hsl(25,15%,50%)" }}>₽ включая НДС</div>
                </div>
              </div>

              <div className="text-xs mb-8 p-4 rounded-sm" style={{ background: "rgba(155,122,47,0.06)", border: "1px solid rgba(155,122,47,0.15)", color: "hsl(25,15%,50%)" }}>
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
