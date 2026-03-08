export default function TabContent() {
  return (<>
    <h1 className="page-title">Контент-маркетинг</h1>
    <p className="page-desc">Контент — найдешевший і найдовгостроковіший спосіб залучення клієнтів. Правильний контент продає без реклами.</p>
    <div className="tags">{['Типи контенту','Формули текстів','Рубрики','Storytelling','Зображення'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    <div className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80')`}}/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="hero-eyebrow">✍️ Контент</div>
        <div className="hero-title">Контент, що продає<br/>без продажу</div>
        <div className="hero-desc">80% корисне, 20% комерційне — золоте правило контент-стратегії</div>
      </div>
    </div>

    <div className="g3">
      {[['🎓','Освітній','Навчай, ділись знаннями. Будує довіру і авторитет. Найкраще для довгострокового росту.'],['😂','Розважальний','Гумор, тренди, культурні референси. Збільшує охоплення та share.'],['💪','Надихаючий','Успіхи, цитати, трансформації. Підвищує емоційний звʼязок.'],['🛍️','Комерційний','Продукти, ціни, акції, CTA. Не більше 20% від загального контенту.'],['🗣️','Соціальний','Відгуки, UGC, колаборації. Будує соціальний доказ.'],['🔍','За кадром','Процес, команда, помилки. Будує довіру та людяність.']].map(([ico,t,d])=>(
        <div key={t} className="card"><div style={{fontSize:'1.4rem',marginBottom:'.4rem'}}>{ico}</div><div className="sec-title" style={{marginBottom:'.3rem'}}>{t}</div><div className="body-text">{d}</div></div>
      ))}
    </div>

    <div className="card purple">
      <div className="sec-title">✍️ Формули текстів, що продають</div>
      <div className="g2" style={{marginTop:'.875rem'}}>
        {[['AIDA','Attention → Interest → Desire → Action\n\n"Ти досі витрачаєш 3 години на контент?" (A)\n"А якби можна було за 30 хвилин?" (I)\n"Уяви: готовий контент-план на тиждень..." (D)\n"Натисни та отримай шаблон безкоштовно" (A)'],['PAS','Problem → Agitate → Solution\n\n"Немає клієнтів з соцмереж?" (P)\n"Це означає: витрачаєш час але не отримуєш результат..." (A)\n"Ось система, що дає перших клієнтів за 30 днів" (S)'],['PPPP','Picture → Promise → Prove → Push\n\n"Уяви 100 нових підписників за тиждень..." (Picture)\n"Це реально з нашим методом" (Promise)\n"Ось 47 відгуків клієнтів" (Prove)\n"Старт сьогодні — посилання в шапці" (Push)'],['4U','Useful → Urgent → Unique → Ultra-specific\n\n"Отримай 10 шаблонів постів (Useful)\nбезкоштовно до пʼятниці (Urgent)\nяких нема у вільному доступі (Unique)\nдля Instagram-магазинів одягу" (Specific)']].map(([name,text])=>(
          <div key={name} className="codebox">
            <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">{name}</span></div>
            <pre style={{fontSize:'.68rem'}}>{text}</pre>
          </div>
        ))}
      </div>
    </div>

    <div className="tip">
      <div className="tip-label">📐 Правило 80/20</div>
      <div className="tip-text"><strong>80% контенту</strong> — корисний, освітній, розважальний. Не продає напряму.<br/><strong>20% контенту</strong> — комерційний: продукти, послуги, акції, CTA.<br/>Якщо порушити баланс — аудиторія відписується або перестає читати.</div>
    </div>
  </>);
}
