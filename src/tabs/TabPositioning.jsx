export default function TabPositioning() {
  return (<>
    <h1 className="page-title">Позиціонування</h1>
    <p className="page-desc">Позиціонування — це місце, яке займає твій бренд у свідомості клієнта. Це відповідь на питання: "Чому саме ти?"</p>
    <div className="tags">{['УТП','Ніша','Конкуренти','Цінова позиція','Диференціація'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    <div className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80')`}}/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="hero-eyebrow">🎯 Позиціонування</div>
        <div className="hero-title">Займи своє місце<br/>в голові клієнта</div>
        <div className="hero-desc">Чітке позиціонування = менші витрати на рекламу + вищі ціни + лояльніші клієнти</div>
      </div>
    </div>

    <div className="card purple">
      <div className="sec-title">🔑 Формула УТП (Унікальна Торгова Пропозиція)</div>
      <div className="codebox" style={{marginTop:'.875rem'}}>
        <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">Шаблон УТП</span></div>
        <pre>{`Ми допомагаємо [ЦА]
досягти [РЕЗУЛЬТАТ]
за допомогою [МЕТОД/ПРОДУКТ]
на відміну від [КОНКУРЕНТ],
тому що [ДОКАЗ].

─────────────────────────────
ПРИКЛАД:
"Ми допомагаємо малому бізнесу
отримати перших 100 клієнтів
за допомогою системи SMM-контенту
на відміну від агенцій,
тому що ми самі пройшли цей шлях."`}</pre>
      </div>
    </div>

    <div className="g3">
      {[['🏆','Лідер ринку','Ти найбільший, найпопулярніший. Стратегія: захист позиції, масштаб.'],['💎','Преміум','Ти найкращий за якістю. Стратегія: вища ціна, ексклюзивність.'],['💰','Доступність','Ти найдешевший. Стратегія: обʼєм, ефективність витрат.'],['🎯','Ніша','Ти спеціаліст у вузькій темі. Стратегія: глибока експертиза.'],['🌱','Цінності','Ти відповідальний/еко/локальний. Стратегія: community.'],['⚡','Швидкість','Ти найшвидший. Стратегія: сервіс, доставка, реакція.']].map(([ico,t,d])=>(
        <div key={t} className="card"><div style={{fontSize:'1.4rem',marginBottom:'.4rem'}}>{ico}</div><div className="sec-title" style={{marginBottom:'.3rem'}}>{t}</div><div className="body-text">{d}</div></div>
      ))}
    </div>

    <div className="card red">
      <div className="sec-title">📊 Аналіз конкурентів — що дивитись</div>
      <div className="steps">
        {[['Знайди 5-7 прямих конкурентів','Google, соцмережі, маркетплейси — хто ще вирішує ту ж проблему'],['Аналізуй їх позиціонування','Що вони обіцяють? Яку мову використовують? На кого таргетуються?'],['Знайди незайняту нішу','Де є попит але мало пропозиції? Яка проблема не вирішена?'],['Сформулюй свою різницю','Не "краще", а "інакше". Конкретно: що саме відрізняє?'],['Перевір на клієнтах','Питай: "Чому ви обрали нас а не X?" — ось твоє реальне УТП']].map(([t,d],i)=>(
          <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
        ))}
      </div>
    </div>

    <div className="tip">
      <div className="tip-label">⚡ Золоте правило</div>
      <div className="tip-text">Не намагайся подобатись всім — це шлях до нікого. <strong>Чіткіше позиціонування = менша аудиторія але вищий відсоток конверсії.</strong> Краще бути першим вибором для 1000 людей, ніж 10-м для мільйона.</div>
    </div>
  </>);
}
