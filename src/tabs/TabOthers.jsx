// TabEmail.jsx
export function TabEmail() {
  return (<>
    <h1 className="page-title">Email-маркетинг</h1>
    <p className="page-desc">Email дає $42 повернення на кожен $1 витрат — найвища ROI серед усіх каналів. Список підписників — актив що належить тобі.</p>
    <div className="tags">{['Розсилки','Автоматизація','Сегментація','Subject line','Drip-кампанії'].map(t=><span key={t} className="tag">{t}</span>)}</div>
    <div className="g3" style={{marginBottom:'1.5rem'}}>
      {[['$42','ROI кожного $1'],['22%','Середній Open Rate'],['3.5%','Середній CTR'],['4x','Вища конверсія vs соцмережі']].map(([n,l])=>(
        <div key={l} className="stat"><div className="stat-num">{n}</div><div className="stat-label">{l}</div><div className="stat-up">↑ Email перемагає</div></div>
      ))}
    </div>
    <div className="card blue">
      <div className="sec-title">📧 Анатомія листа що читають</div>
      <div className="codebox" style={{marginTop:'.875rem'}}>
        <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">Структура ефективного листа</span></div>
        <pre>{`Subject:  [Цифра/Питання] + Вигода + Терміновість
          "7 помилок що вбивають ваш Instagram (помилка #3 шокує)"

Preview:  Перше речення листа — чіпляє якщо тема не спрацювала

Тіло:
  • Особисте привітання (ім'я)
  • Гачок — проблема або питання
  • Цінність — рішення або інформація
  • Соціальний доказ (якщо потрібно)
  • Один чіткий CTA-кнопка

CTA:      "Читати повністю →" / "Отримати шаблон" / "Записатись"

P.S.:     Завжди додай P.S. — його читають навіть ті хто скіпає`}</pre>
      </div>
    </div>
    <div className="g2">
      <div className="card green">
        <div className="sec-title">✅ Найкращі Subject Lines</div>
        <ul className="checklist">
          {[['ok','Питання: "Ти робиш цю помилку?"'],['ok','Цифри: "5 способів збільшити продажі"'],['ok','Терміновість: "Залишилось 24 години"'],['ok','Особисте: "Катерино, для тебе"'],['ok','Цікавість: "Ніколи не здогадаєшся..."'],['warn','Уникай слів БЕЗКОШТОВНО, !!!!, АКЦІЯ — спам'],['no','Не пиши все великими літерами']].map(([t,txt],i)=>(
            <li key={i} className="check-item"><span className={`check-ico ${t}`}>{t==='ok'?'✓':t==='warn'?'!':'✗'}</span>{txt}</li>
          ))}
        </ul>
      </div>
      <div className="card orange">
        <div className="sec-title">🛠️ Інструменти Email</div>
        <div className="steps">
          {[['MailChimp','Безкоштовно до 500 підписників. Простий інтерфейс.'],['Brevo (Sendinblue)','300 листів/день безкоштовно. Автоматизації.'],['ConvertKit','Для творців і блогерів. Потужна сегментація.'],['GetResponse','Повний пакет: email + лендінги + вебінари.']].map(([t,d],i)=>(
            <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
    </div>
    <div className="tip">
      <div className="tip-label">⚡ Почни збирати базу ЗАРАЗ</div>
      <div className="tip-text">Навіть якщо ще немає продукту — збирай email-адреси. <strong>Додай форму підписки на сайт + лід-магніт.</strong> 1000 підписників = актив на роки.</div>
    </div>
  </>);
}

// TabAds.jsx
export function TabAds() {
  return (<>
    <h1 className="page-title">Реклама та бюджет</h1>
    <p className="page-desc">Реклама підсилює те що вже працює органічно. Не запускай рекламу без перевіреного повідомлення і чіткої аудиторії.</p>
    <div className="tags">{['Facebook Ads','Google Ads','Таргет','Бюджет','ROI','A/B тест'].map(t=><span key={t} className="tag">{t}</span>)}</div>
    <div className="card red">
      <div className="sec-title">⚠️ Перед запуском реклами — чеклист</div>
      <ul className="checklist">
        {[['ok','Є чіткий аватар цільової аудиторії'],['ok','Є перевірений офер (протестований органічно)'],['ok','Є лендінг або профіль з соціальним доказом'],['ok','Є трекінг конверсій (Pixel, Google Analytics)'],['ok','Є бюджет на 2-4 тижні тестів ($100-300 мінімум)'],['warn','Не запускай на холодну без ретаргету'],['no','Не ллєш трафік на погану сторінку']].map(([t,txt],i)=>(
          <li key={i} className="check-item"><span className={`check-ico ${t}`}>{t==='ok'?'✓':t==='warn'?'!':'✗'}</span>{txt}</li>
        ))}
      </ul>
    </div>
    <div className="g2">
      <div className="card blue">
        <div className="sec-title">📘 Facebook / Instagram Ads</div>
        <div className="steps">
          {[['Awareness (знання)','Відео 6-15 сек. Мета: охоплення. $5-10/день'],['Engagement (залучення)','Пости з CTA. Мета: лайки, коменти, підписники'],['Traffic (трафік)','Реклама на сайт/лендінг. Оптимізація по кліках'],['Conversion (конверсія)','Мета: покупка, заявка. Потрібен Pixel'],['Retargeting','Реклама тим хто вже був на сайті. Найвища конверсія']].map(([t,d],i)=>(
            <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
      <div className="card green">
        <div className="sec-title">🔍 Google Ads</div>
        <div className="steps">
          {[['Search Ads','Реклама в пошуку. Для "гарячого" попиту: "купити X"'],['Display Ads','Банери на сайтах. Для ретаргетингу та awareness'],['YouTube Ads','Відео реклама. Pre-roll 15 сек або Discovery'],['Shopping Ads','Для інтернет-магазинів. Фото + ціна у пошуку'],['Performance Max','Автоматизована кампанія по всіх каналах Google']].map(([t,d],i)=>(
            <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
    </div>
    <div className="card-dark">
      <div className="sec-title">💰 Як розподілити рекламний бюджет</div>
      <div className="codebox" style={{marginTop:'.875rem'}}>
        <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">Розподіл бюджету $500/міс</span></div>
        <pre>{`40% → Ретаргетинг (вже знають тебе)
       Найвища конверсія, найдешевший клієнт

30% → Lookalike аудиторії
       Схожі на твоїх клієнтів

20% → Cold audience тести
       Нові гіпотези і аудиторії

10% → Резерв для масштабування
       Якщо щось спрацювало — збільш

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROI нижче 2x → зупини, аналізуй
ROI 2-5x    → оптимізуй
ROI 5x+     → масштабуй агресивно`}</pre>
      </div>
    </div>
  </>);
}

// TabAnalytics.jsx
export function TabAnalytics() {
  return (<>
    <h1 className="page-title">Аналітика та метрики</h1>
    <p className="page-desc">Не можна управляти тим що не вимірюєш. Ці метрики покажуть що реально працює в твоєму маркетингу.</p>
    <div className="tags">{['KPI','ROI','CAC','LTV','CTR','Конверсія'].map(t=><span key={t} className="tag">{t}</span>)}</div>
    <div className="g4" style={{marginBottom:'1.5rem'}}>
      {[['CTR','Click-Through Rate — % кліків від показів'],['CPC','Cost Per Click — ціна одного кліку'],['CAC','Cost of Acquisition — ціна залучення клієнта'],['LTV','Lifetime Value — цінність клієнта за весь час']].map(([n,l])=>(
        <div key={n} className="stat"><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
      ))}
    </div>
    <div className="card blue">
      <div className="sec-title">📊 Що вимірювати щотижня</div>
      <div className="g3" style={{marginTop:'.875rem'}}>
        {[['📱 Соцмережі','Охоплення\nЗалучення (ER%)\nЗріст підписників\nНайкращі пости'],['📧 Email','Open Rate (>20%)\nCTR (>2%)\nВідписки (<0.5%)\nДоставка (>95%)'],['🌐 Сайт','Трафік (GA4)\nЧас на сторінці\nВідмова (Bounce)\nКонверсія у ліди'],['💰 Реклама','CPM (ціна 1000 показів)\nCPC (ціна кліку)\nCPA (ціна дії)\nROAS (окупність)'],['🤝 Продажі','Кількість лідів\nКонверсія в угоду\nСередній чек\nLTV клієнта'],['📈 Зріст','MoM зростання %\nNPS (лояльність)\nChurn (відтік)\nNRR (утримання $)']].map(([t,c])=>(
          <div key={t} className="codebox">
            <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">{t}</span></div>
            <pre style={{fontSize:'.65rem'}}>{c}</pre>
          </div>
        ))}
      </div>
    </div>
    <div className="tip">
      <div className="tip-label">📐 Правило North Star Metric</div>
      <div className="tip-text">Обери одну головну метрику (North Star) яка найкраще відображає зростання твого бізнесу. Для Instagram — це збереження. Для SaaS — активні користувачі. Для e-commerce — повторні покупки. <strong>Все інше — ванітні метрики.</strong></div>
    </div>
  </>);
}

// TabNetworking.jsx
export function TabNetworking() {
  return (<>
    <h1 className="page-title">Нетворкінг</h1>
    <p className="page-desc">85% вакансій закриваються через знайомства. В бізнесі ще більше. Правильні звʼязки = прискорення у 5-10 разів.</p>
    <div className="tags">{['Бізнес-клуби','LinkedIn','Партнерства','Конференції','Колаборації'].map(t=><span key={t} className="tag">{t}</span>)}</div>
    <div className="g3">
      {[['🏢','Бізнес-клуби','EO, YPO, BNI — регулярні зустрічі підприємців. Тут укладаються угоди.'],['🎤','Конференції','Виступай як спікер — це найкраща реклама. Або просто відвідуй і знайомся.'],['💼','LinkedIn','Особистий бренд на LinkedIn приводить B2B клієнтів краще ніж будь-яка реклама.'],['🤝','Колаборації','Партнерства з неконкурентами де одна й та ж ЦА. Взаємна вигода.'],['🎓','Навчальні події','Семінари, воркшопи — люди що навчаються мають гроші і мотивацію.'],['💬','Онлайн-ком\'юніті','Facebook-групи, Telegram-чати — де твоя аудиторія спілкується.']].map(([ico,t,d])=>(
        <div key={t} className="card"><div style={{fontSize:'1.4rem',marginBottom:'.4rem'}}>{ico}</div><div className="sec-title" style={{marginBottom:'.3rem'}}>{t}</div><div className="body-text">{d}</div></div>
      ))}
    </div>
    <div className="card orange">
      <div className="sec-title">🤝 Скрипт знайомства на події</div>
      <div className="codebox" style={{marginTop:'.875rem'}}>
        <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">30-секундний elevator pitch</span></div>
        <pre>{`1. Хто ти: "Привіт, я Андрій"

2. Що ти робиш (для КОГО + РЕЗУЛЬТАТ):
   "Я допомагаю малому бізнесу
   отримати перших клієнтів з соцмереж"

3. Чим відрізняєшся:
   "На відміну від агенцій —
   ми навчаємо власника самому"

4. Питання до співрозмовника:
   "А ти в якій сфері?"
   ← ВСЕ. Тепер слухай.`}</pre>
      </div>
    </div>
    <div className="tip">
      <div className="tip-label">💡 Правило нетворкінгу</div>
      <div className="tip-text"><strong>Давай перед тим як просити.</strong> Поділись контактом, дай пораду, зроби інтро — і люди самі захочуть допомогти тобі. Нетворкінг = це не продаж, це інвестиція у відносини.</div>
    </div>
  </>);
}

// TabSystem.jsx
export function TabSystem() {
  return (<>
    <h1 className="page-title">⚙️ Маркетингова система</h1>
    <p className="page-desc">Ціль — побудувати систему яка працює без твоєї постійної участі. Автоматизація + делегування + процеси.</p>
    <div className="tags">{['Автоматизація','CRM','Процеси','Делегування','Масштабування'].map(t=><span key={t} className="tag">{t}</span>)}</div>
    <div className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80')`}}/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="hero-eyebrow">⚙️ Система</div>
        <div className="hero-title">Маркетинг що працює<br/>поки ти спиш</div>
        <div className="hero-desc">Автоматизація рутини → фокус на стратегії → масштабування результату</div>
      </div>
    </div>
    <div className="card green">
      <div className="sec-title">🗺️ Повна маркетингова система — схема</div>
      <div className="steps">
        {[['Бренд і позиціонування','Хто ти, для кого, чим відрізняєшся. Раз і назавжди.'],['Визначена ЦА','Аватар клієнта, болі, бажання, де знаходиться.'],['Контент-стратегія','Рубрики, формати, тон, частота. Шаблони в Canva.'],['Система постингу','Контент-план на місяць, батч-виробництво, планувальник.'],['Email-база і воронка','Лід-магніт → підписка → автосерія → оффер.'],['Реклама на прогріту ЦА','Тільки після того як органіка підтвердила месседж.'],['CRM і обробка лідів','Кожен лід зафіксований, кожен клієнт в базі.'],['Аналітика щотижня','Дашборд: охоплення, ліди, конверсія, CAC, LTV.'],['Ретенція і LTV','Повторні продажі, програма лояльності, реферали.'],['Масштабування','Що працює → більше бюджету. Що не працює → зупинити.']].map(([t,d],i)=>(
          <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
        ))}
      </div>
    </div>
    <div className="card-dark">
      <div className="sec-title">🛠️ Мінімальний стек інструментів</div>
      <div className="g3" style={{marginTop:'.875rem'}}>
        {[['Notion','CRM + контент-план + база знань + задачі'],['Canva','Всі візуали: пости, stories, презентації'],['ChatGPT','Ідеї + тексти + адаптація контенту'],['Later/Buffer','Планування і автопублікація в соцмережах'],['Brevo','Email-маркетинг і автоматизація безкоштовно'],['Google Analytics 4','Аналітика сайту і конверсій']].map(([t,d])=>(
          <div key={t} style={{background:'#222',borderRadius:'10px',padding:'.875rem',border:'1px solid #2d2d2d'}}>
            <div style={{fontSize:'.82rem',fontWeight:700,color:'#f0ece4',marginBottom:'.25rem'}}>{t}</div>
            <div style={{fontSize:'.72rem',color:'#9a9080',lineHeight:1.5}}>{d}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="quote">
      <div className="quote-text">"Маркетинг — це більше не про те що ти виробляєш, а про те які історії ти розповідаєш."</div>
      <div className="quote-by">— Seth Godin</div>
    </div>
    <div className="tip">
      <div className="tip-label">🚀 Старт за 7 днів</div>
      <div className="tip-text">День 1-2: Визнач ЦА і УТП. День 3: Налаштуй профіль і Canva-шаблони. День 4-5: Напиши 10 постів наперед. День 6: Запусти лід-магніт. День 7: Опублікуй перший пост і розкажи 10 знайомим. <strong>Результат приходить через дію, не через підготовку.</strong></div>
    </div>
  </>);
}
