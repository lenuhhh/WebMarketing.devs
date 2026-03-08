export default function TabIntro() {
  return (<>
    <h1 className="page-title">Маркетингова система з нуля</h1>
    <p className="page-desc">Від першого поста до повноцінної воронки продажів. Всі інструменти, стратегії та приклади — українською, зрозуміло і практично.</p>
    <div className="tags">
      {['Маркетинг','Брендинг','SMM','Контент','Воронки','Реклама','14 розділів','100+ фішок'].map(t=><span key={t} className="tag">{t}</span>)}
    </div>

    {/* Hero banner */}
    <div className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80')`}}/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="hero-eyebrow">🚀 Старт курсу</div>
        <div className="hero-title">Побудуй маркетинг,<br/>що приносить клієнтів</div>
        <div className="hero-desc">Системний підхід: бренд → аудиторія → контент → реклама → аналітика</div>
        <div className="hero-tags">{['Безкоштовно','Практично','З прикладами'].map(t=><span key={t} className="hero-tag">{t}</span>)}</div>
      </div>
    </div>

    {/* Stats */}
    <div className="g4" style={{marginBottom:'1.5rem'}}>
      {[['14','Розділів курсу'],['100+','Практичних фішок'],['8','Платформ'],['3x','Ріст охоплення']].map(([n,l])=>(
        <div key={l} className="stat"><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
      ))}
    </div>

    {/* TOC */}
    <div className="toc">
      <div className="toc-title">📋 Зміст курсу</div>
      <ul className="toc-list">
        {[['🎨','Брендинг та айдентика — логотип, кольори, голос'],['🎯','Позиціонування — як відрізнятись від конкурентів'],['👥','Цільова аудиторія — хто і де твій клієнт'],['✍️','Контент-маркетинг — що і як писати'],['📱','Соціальні мережі — яка платформа для якого бізнесу'],['📅','Система постингу — контент-план і рубрики'],['🤝','Залучення клієнтів — 15 каналів без бюджету'],['🔻','Воронка продажів — від незнайомця до покупця'],['🖼️','Візуальні матеріали — телефонні картки, візитки'],['📧','Email-маркетинг — листи, що читають'],['💰','Реклама та бюджет — таргет і Google'],['📊','Аналітика — як вимірювати результат'],['🌐','Нетворкінг — партнерства та рекомендації']].map(([ico,txt],i)=>(
          <li key={i}><span className="toc-n">{i+1}.</span>{ico} {txt}</li>
        ))}
      </ul>
    </div>

    {/* Principle */}
    <div className="card green">
      <div className="sec-title">💡 Головний принцип маркетингу</div>
      <div className="quote">
        <div className="quote-text">"Маркетинг — це не реклама. Маркетинг — це система, яка працює поки ти спиш."</div>
        <div className="quote-by">— Seth Godin, маркетолог</div>
      </div>
      <div className="body-text">Успішний маркетинг — це: правильна аудиторія + правильне повідомлення + правильний канал + правильний час. Якщо прибрати будь-який елемент — система не працює.</div>
    </div>

    <div className="tip">
      <div className="tip-label">⚡ Почни звідси</div>
      <div className="tip-text">Перш ніж запускати рекламу — визнач: <strong>хто твій клієнт</strong>, <strong>яка твоя унікальна пропозиція</strong>, <strong>чому мають обрати тебе</strong>. Без цього будь-який бюджет — марнотратство.</div>
    </div>
  </>);
}
