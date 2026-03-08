export default function TabFunnel() {
  const stages = [
    {label:'Охоплення (Awareness)',pct:100,color:'#2980b9',desc:'Люди дізнаються про тебе вперше'},
    {label:'Інтерес (Interest)',pct:40,color:'#27ae60',desc:'Підписались, перейшли на сайт'},
    {label:'Розгляд (Consideration)',pct:20,color:'#f39c12',desc:'Переглядають ціни, читають відгуки'},
    {label:'Намір (Intent)',pct:10,color:'#d35400',desc:'Додали в кошик, написали в директ'},
    {label:'Покупка (Purchase)',pct:4,color:'#c0392b',desc:'Оплатили. Вітаємо — це клієнт!'},
    {label:'Лояльність (Loyalty)',pct:2,color:'#8e44ad',desc:'Повертаються і рекомендують'},
  ];
  return (<>
    <h1 className="page-title">Воронка продажів</h1>
    <p className="page-desc">Воронка — це шлях людини від "вперше почув" до "купив і порекомендував". Завдання маркетингу — збільшити конверсію на кожному кроці.</p>
    <div className="tags">{['AIDA','Lead Magnet','Прогрів','Конверсія','Ретенція','LTV'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    <div className="card blue">
      <div className="sec-title">🔻 Класична воронка продажів</div>
      <div className="funnel" style={{marginTop:'.875rem'}}>
        {stages.map(({label,pct,color,desc})=>(
          <div key={label} className="funnel-step">
            <div className="funnel-label">{label}</div>
            <div className="funnel-bar-wrap"><div className="funnel-bar" style={{width:`${pct}%`,background:color}}/></div>
            <div className="funnel-pct">{pct}%</div>
          </div>
        ))}
      </div>
      <div className="body-text">В середньому з 100 людей що почули про тебе — купують 4. Це нормально. Завдання: підняти кожен крок на 1-2%.</div>
    </div>

    <div className="g2">
      <div className="card green">
        <div className="sec-title">🧲 Лід-магніти — що працює</div>
        <ul className="checklist">
          {[['ok','Безкоштовний чеклист / PDF (топ-1 по конверсії)'],['ok','Міні-курс або вебінар (3-5 уроків)'],['ok','Шаблони та інструменти (Notion, Canva)'],['ok','Безкоштовна консультація 30 хвилин'],['ok','Пробний доступ до продукту (7 днів)'],['ok','Калькулятор або тест (інтерактив)'],['warn','Знижка 10% — найгірший лід-магніт (низька цінність)']].map(([t,txt],i)=>(
            <li key={i} className="check-item"><span className={`check-ico ${t}`}>{t==='ok'?'✓':'!'}</span>{txt}</li>
          ))}
        </ul>
      </div>
      <div className="card orange">
        <div className="sec-title">🔥 Прогрів аудиторії</div>
        <div className="steps">
          {[['Контент (3-4 тижні)','Регулярно даєш цінність без продажу'],['Соціальний доказ','Відгуки, кейси, результати клієнтів'],['Особиста історія','Показуєш хто ти, чому тобі можна довіряти'],['Анонс','Розповідаєш що буде — без тиску'],['Відкриття продажів','Обмежена пропозиція + бонус за швидкість']].map(([t,d],i)=>(
            <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
    </div>

    <div className="card-dark">
      <div className="sec-title">📈 Email-воронка — приклад послідовності</div>
      <div className="codebox" style={{marginTop:'.875rem'}}>
        <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">Автоматична Email-серія (7 листів)</span></div>
        <pre>{`День 0: Лист підтвердження + лід-магніт
        "Ось твій [назва] — 3 речі для старту"

День 1: Особиста історія
        "Чому я почав цим займатись..."

День 2: Головний біль аудиторії
        "Найбільша помилка в [темі]..."

День 3: Кейс клієнта
        "Як [Ім'я] досягла X за Y днів"

День 5: Контент-цінність
        "5 інструментів які я використовую"

День 7: М'який оффер
        "До речі, є один спосіб..."`}</pre>
      </div>
    </div>

    <div className="tip">
      <div className="tip-label">🎯 LTV важливіший за CAC</div>
      <div className="tip-text"><strong>LTV (Lifetime Value)</strong> — скільки приносить клієнт за весь час. <strong>CAC (Cost of Acquisition)</strong> — скільки коштує залучити. Якщо LTV {'>'} CAC × 3 — бізнес здоровий. Фокусуйся на повторних продажах.</div>
    </div>
  </>);
}
