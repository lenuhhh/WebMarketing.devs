export default function TabBranding() {
  return (<>
    <h1 className="page-title">Брендинг та айдентика</h1>
    <p className="page-desc">Бренд — це не логотип. Це відчуття, яке виникає у людини при думці про тебе. Як це побудувати — тут.</p>
    <div className="tags">{['Логотип','Фірмовий стиль','Голос бренду','Кольори','Типографіка'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    <div className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80')`}}/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="hero-eyebrow">🎨 Брендинг</div>
        <div className="hero-title">Бренд, який<br/>неможливо забути</div>
        <div className="hero-desc">Від першого враження до довічної лояльності — будуємо систему ідентичності</div>
      </div>
    </div>

    <div className="g2">
      <div className="card blue">
        <div className="sec-title">🏛️ Що таке бренд</div>
        <div className="steps">
          {[['Ідентичність','Хто ти є — місія, цінності, характер'],['Обіцянка','Що ти даєш клієнту — унікальна цінність'],['Досвід','Як відчувається взаємодія з тобою'],['Репутація','Що кажуть про тебе без тебе']].map(([t,d])=>(
            <div key={t} className="step"><div className="step-num">→</div><div><div className="step-title">{t}</div><div className="step-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
      <div className="card orange">
        <div className="sec-title">🎨 Візуальна айдентика</div>
        <ul className="checklist">
          {[['ok','Логотип у 3 версіях (повний, скорочений, favicon)'],['ok','Фірмові кольори (2-3 основних + нейтральні)'],['ok','Типографіка (1-2 шрифти, не більше)'],['ok','Іконки та ілюстрації в одному стилі'],['ok','Шаблони для соцмереж і презентацій'],['warn','Уникай більше 3 кольорів у логотипі'],['no','НЕ використовуй кліпарт і стокові логотипи']].map(([t,txt],i)=>(
            <li key={i} className="check-item"><span className={`check-ico ${t}`}>{t==='ok'?'✓':t==='warn'?'!':'✗'}</span>{txt}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Brandbook section */}
    <div className="card-dark">
      <div className="sec-title">📖 Структура брендбуку</div>
      <div className="g3" style={{marginTop:'.875rem'}}>
        {[['🎯','Місія і цінності','Навіщо існує бізнес. Яку проблему вирішує.'],['🗣️','Голос бренду','Тон спілкування: офіційний, дружній, провокаційний'],['🎨','Кольорова палітра','HEX, RGB, CMYK коди для всіх носіїв'],['✍️','Типографіка','Шрифти, розміри, інтервали, ієрархія'],['🖼️','Зображення','Стиль фото, фільтри, теми, що підходять'],['📐','Сітка та відступи','Правила розміщення на всіх носіях']].map(([ico,t,d])=>(
          <div key={t} style={{background:'#222',borderRadius:'10px',padding:'.875rem',border:'1px solid #2d2d2d'}}>
            <div style={{fontSize:'1.3rem',marginBottom:'.35rem'}}>{ico}</div>
            <div style={{fontSize:'.82rem',fontWeight:700,color:'#f0ece4',marginBottom:'.25rem'}}>{t}</div>
            <div style={{fontSize:'.72rem',color:'#9a9080',lineHeight:1.55}}>{d}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Business card showcase */}
    <div className="card teal">
      <div className="sec-title">💳 Приклади візиток — макети</div>
      <div className="body-text" style={{marginBottom:'1rem'}}>Бачиш як бренд "живе" на матеріальних носіях. Прокрути горизонтально.</div>
      <div className="showcase">
        {/* Dark minimal */}
        <div className="bizcard">
          <div className="bizcard-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80')`}}/>
          <div className="bizcard-overlay" style={{background:'rgba(10,10,10,.75)'}}/>
          <div className="bizcard-body" style={{color:'white'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div className="bizcard-logo">NOVA</div>
              <div className="bizcard-tagline">Digital Agency Since 2020</div>
            </div>
            <div><div className="bizcard-name">Олена Коваль</div><div className="bizcard-role">Founder & Creative Director</div><div className="bizcard-contacts"><span className="bizcard-contact">📧 olena@nova.ua</span><span className="bizcard-contact">📱 +38 050 123 45 67</span></div></div>
          </div>
        </div>

        {/* Light cream */}
        <div className="bizcard">
          <div className="bizcard-overlay" style={{background:'#faf7f2'}}/>
          <div className="bizcard-body" style={{color:'#1a1a1a'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div className="bizcard-logo" style={{fontFamily:'Georgia,serif',fontSize:'1.4rem'}}>Bloom</div>
              <div className="bizcard-tagline" style={{color:'#7a7265'}}>Florist & Events</div>
            </div>
            <div><div className="bizcard-name">Марія Петренко</div><div className="bizcard-role" style={{color:'#7a7265'}}>Флорист · Декоратор</div><div className="bizcard-contacts"><span className="bizcard-contact" style={{color:'#5c564e'}}>🌸 bloom.studio.ua</span><span className="bizcard-contact" style={{color:'#5c564e'}}>📱 @bloom_studio</span></div></div>
          </div>
        </div>

        {/* Bold gradient */}
        <div className="bizcard">
          <div className="bizcard-overlay" style={{background:'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)'}}/>
          <div className="bizcard-body" style={{color:'white'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div className="bizcard-logo" style={{fontSize:'1rem',letterSpacing:'.15em',fontWeight:700}}>VERTEX</div>
              <div className="bizcard-tagline" style={{color:'rgba(255,255,255,.55)'}}>IT Solutions</div>
            </div>
            <div><div className="bizcard-name">Андрій Мороз</div><div className="bizcard-role" style={{opacity:.65}}>Lead Developer</div><div className="bizcard-contacts"><span className="bizcard-contact" style={{opacity:.7}}>💻 vertex.tech</span><span className="bizcard-contact" style={{opacity:.7}}>in /andriy-moroz</span></div></div>
          </div>
        </div>

        {/* Warm orange */}
        <div className="bizcard">
          <div className="bizcard-overlay" style={{background:'linear-gradient(135deg,#d35400,#e67e22)'}}/>
          <div className="bizcard-body" style={{color:'white'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div className="bizcard-logo" style={{fontSize:'1.5rem'}}>☕</div>
              <div className="bizcard-tagline" style={{opacity:.8}}>Specialty Coffee</div>
            </div>
            <div><div className="bizcard-name">Вогонь Café</div><div className="bizcard-role" style={{opacity:.75}}>м. Рівне, вул. Соборна 12</div><div className="bizcard-contacts"><span className="bizcard-contact" style={{opacity:.8}}>📱 @vohon.cafe</span></div></div>
          </div>
        </div>
      </div>
    </div>

    <div className="tip">
      <div className="tip-label">💡 Правило бренду</div>
      <div className="tip-text">Постійність важливіша за досконалість. Краще простий але стабільний фірмовий стиль, ніж ідеальний але різний кожного тижня.</div>
    </div>
  </>);
}
