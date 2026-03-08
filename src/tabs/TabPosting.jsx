export default function TabPosting() {
  const plan = [
    {day:'Пн',icon:'🎓',type:'Освітній',ex:'3 факти про [тема] які більшість не знає'},
    {day:'Вт',icon:'💼',type:'Кейс/кейсі',ex:'Як ми допомогли клієнту досягти [результат]'},
    {day:'Ср',icon:'🛍️',type:'Продуктовий',ex:'Чому [продукт] — найкраще рішення для [проблема]'},
    {day:'Чт',icon:'💬',type:'Залучення',ex:'Питання до аудиторії / Опитування / Гра'},
    {day:'Пт',icon:'🔍',type:'За кадром',ex:'Як ми [процес]. Що відбувається у нашій команді'},
    {day:'Сб',icon:'😂',type:'Розважальний',ex:'Мем/жарт по темі. Тренд адаптований під бренд'},
    {day:'Нд',icon:'🌟',type:'Надихаючий',ex:'Успіх клієнта / мотиваційна цитата / результат'},
  ];
  return (<>
    <h1 className="page-title">Система постингу</h1>
    <p className="page-desc">Системний постинг важливіший за ідеальний. 3 пости на тиждень стабільно > 7 постів одного тижня і 0 наступного.</p>
    <div className="tags">{['Контент-план','Рубрики','Частота','Час публікацій','Планування'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    <div className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80')`}}/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="hero-eyebrow">📅 Постинг</div>
        <div className="hero-title">Контент-план на тиждень<br/>за 30 хвилин</div>
        <div className="hero-desc">Шаблон рубрик + час публікацій + формули заголовків — все в одному місці</div>
      </div>
    </div>

    {/* Weekly plan */}
    <div className="card blue">
      <div className="sec-title">📅 Тижневий контент-план</div>
      <div className="steps" style={{marginTop:'.875rem'}}>
        {plan.map(({day,icon,type,ex})=>(
          <div key={day} className="step">
            <div className="step-num" style={{background:'var(--bg-card)',color:'var(--text)',fontFamily:'var(--font-serif)',fontWeight:700,fontSize:'.7rem'}}>{day}</div>
            <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'space-between',gap:'1rem',flexWrap:'wrap'}}>
              <div><div className="step-title">{icon} {type}</div><div className="step-desc">{ex}</div></div>
              <span className="badge info">{day}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Best time */}
    <div className="g2">
      <div className="card orange">
        <div className="sec-title">⏰ Кращий час публікацій</div>
        <div className="codebox" style={{marginTop:'.875rem'}}>
          <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">Час за платформами</span></div>
          <pre>{`Instagram:
 ранок  → 7:00 - 9:00  (+12% охоплення)
 обід   → 11:00 - 13:00 (+18% охоплення)
 вечір  → 18:00 - 21:00 (+24% охоплення)

TikTok:
 обід   → 12:00 - 14:00
 вечір  → 19:00 - 23:00 ← ПІКОВЕ

Telegram:
 ранок  → 8:00 - 10:00
 вечір  → 20:00 - 22:00

LinkedIn:
 ранок  → 8:00 - 10:00 ← НАЙКРАЩЕ
 обід   → 12:00 - 13:00`}</pre>
        </div>
      </div>
      <div className="card green">
        <div className="sec-title">🛠️ Інструменти планування</div>
        <div className="steps">
          {[['Notion','Безкоштовно. База для контент-планів, шаблони, таблиці','ok'],['Later / Buffer','Автопублікація в Instagram, Facebook, LinkedIn','ok'],['Canva Pro','Шаблони постів, брендові кольори, масова публікація','ok'],['CapCut','Відеомонтаж для Reels та TikTok, авто-субтитри','ok'],['ChatGPT','Генерація ідей та заголовків, адаптація форматів','warn']].map(([t,d,s],i)=>(
            <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
    </div>

    <div className="card purple">
      <div className="sec-title">✍️ 30 ідей для постів на будь-який бізнес</div>
      <div className="g3" style={{marginTop:'.875rem'}}>
        {[['🎓 Освіта','X кроків щоб...\nЩо таке [термін]...\nПомилки які...\nЧому більшість...'],['💼 Кейси','Як ми зробили X за Y\nДо/після нашої роботи\nКлієнт хотів X але отримав...\nРезультат за 30 днів:'],['🗣️ Відгуки','Що кажуть клієнти:\nЦе кращий відгук...\nЧому вони повернулись:\nНесподівано почули:'],['🤔 Залучення','Що ти обираєш: A чи B?\nЗгоден/не згоден?\nЯка твоя думка?\nТільки 10% знають що...'],['🔍 Закулісся','Наш ранок виглядає так:\nЯк ми приймаємо рішення:\nПомилка яка нас навчила:\nЧому ми відмовились від X'],['💡 Тренди','Новини галузі + думка\nТренд + як адаптувати\nГарячий факт дня:\nЩо змінилось у 2025:']].map(([t,c])=>(
          <div key={t} className="codebox">
            <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">{t}</span></div>
            <pre style={{fontSize:'.65rem'}}>{c}</pre>
          </div>
        ))}
      </div>
    </div>

    <div className="tip">
      <div className="tip-label">⚡ Секрет стабільності</div>
      <div className="tip-text">Знімай і готуй контент батчами: <strong>1 день на місяць = 30 одиниць контенту</strong>. Так само роблять великі медіа. Зроби шаблони в Canva, список тем у Notion — і витрачаєш 2 години замість 20.</div>
    </div>
  </>);
}
