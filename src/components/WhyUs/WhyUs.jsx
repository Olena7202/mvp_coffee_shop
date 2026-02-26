import "./WhyUs.css";

export default function WhyUs() {
  return (
    <section className="why-us">
      <h2 className="why-title">Чому обирають нас</h2>
      <div className="why-cards">
        <div className="why-card">
          <h3>Свіже обсмаження</h3>
          <p>Ми обсмажуємо каву щодня, щоб ви отримували найсвіжіший смак.</p>
        </div>
        <div className="why-card">
          <h3>Швидка доставка</h3>
          <p>Доставляємо каву прямо до ваших дверей у найкоротші терміни.</p>
        </div>
        <div className="why-card">
          <h3>Натуральні зерна</h3>
          <p>Використовуємо лише добірні зерна без домішок та ароматизаторів.</p>
        </div>
      </div>
    </section>
  );
}
