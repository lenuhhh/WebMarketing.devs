export default function TabTarget() {
  return (<>
    <h1 className="page-title">Цільова аудиторія</h1>
    <p className="page-desc">Знаючи свого клієнта — ти знаєш що писати, де публікувати і скільки коштує реклама. Без цього — стріляєш наосліп.</p>
    <div className="tags">{['Аватар клієнта','Болі','Бажання','Сегментація','Де шукати'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    <div className="g2" style={{marginBottom:'1.5rem'}}>
      <div className="card blue">
        <div className="sec-title">👤 Аватар клієнта — що заповнити</div>
        <ul className="checklist">
          {[['ok','Вік, стать, місто проживання'],['ok','Професія та рівень доходу'],['ok','Сімейний стан, діти'],['ok','Які соцмережі використовує і коли'],['ok','Які проблеми/болі він має'],['ok','Чого боїться, чого хоче'],['ok','Що читає, на кого підписаний'],['ok','Як приймає рішення про покупку'],['ok','Які заперечення має']].map(([t,txt],i)=>(
            <li key={i} className="check-item"><span className={`check-ico ${t}`}>✓</span>{txt}</li>
          ))}
        </ul>
      </div>
      <div className="card orange">
        <div className="sec-title">🔍 Де знайти інформацію про ЦА</div>
        <div className="steps">
          {[['Google Forms','Опитування існуючих або потенційних клієнтів'],['Коментарі конкурентів','Що пишуть люди під постами схожих брендів'],['Reddit, форуми','Де люди шукають рішення своєї проблеми'],['Відгуки на маркетплейсах','Що хвалять і критикують в аналогічних продуктах'],['Особисті інтервʼю','5-10 дзвінків по 20 хв дають більше ніж 1000 анкет']].map(([t,d],i)=>(
            <div key={i} className="step"><div className="step-num">{i+1}</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
    </div>

    <div className="card-dark">
      <div className="sec-title">📋 Приклад заповненого аватара</div>
      <div className="codebox" style={{marginTop:'.875rem'}}>
        <div className="codebox-bar"><div className="dot r"/><div className="dot y"/><div className="dot g"/><span className="codebox-label">Аватар: "Катерина"</span></div>
        <pre>{`Вік:       28-35 років
Професія:  Менеджер середньої ланки
Місто:     Київ, Харків, Рівне (100k+)
Дохід:     25,000 - 60,000 грн/міс

БОЛІ:
• Немає часу на саморозвиток
• Хоче змінити роботу але боїться
• Не знає з чого почати свій бізнес

БАЖАННЯ:
• Фінансова незалежність
• Визнання та повага
• Більше часу для родини

ПОВЕДІНКА:
• Активна в Instagram та TikTok
• Дивиться YouTube вечорами (21-23h)
• Купує онлайн-курси 2-4 рази на рік
• Довіряє рекомендаціям друзів

ЗАПЕРЕЧЕННЯ:
• "У мене немає на це грошей"
• "Я не впевнена що мені підійде"
• "Я вже пробувала — не вийшло"`}</pre>
      </div>
    </div>

    <div className="card teal">
      <div className="sec-title">🗺️ Де живе твоя аудиторія</div>
      <div className="g3" style={{marginTop:'.875rem'}}>
        {[['📸','Instagram','Жінки 18-45, lifestyle, красота, їжа, подорожі'],['🎵','TikTok','18-30, розваги, освіта, тренди, гумор'],['💼','LinkedIn','B2B, HR, топ-менеджери, кар\'єра'],['📘','Facebook','30-55, місцеві бізнеси, групи за інтересами'],['💬','Telegram','Tech, новини, освіта, ком\'юніті'],['▶️','YouTube','Всі вікові, навчання, огляди, розваги']].map(([ico,pl,desc])=>(
          <div key={pl} className="platform"><div className="platform-icon">{ico}</div><div className="platform-name">{pl}</div><div className="platform-desc">{desc}</div></div>
        ))}
      </div>
    </div>
  </>);
}
