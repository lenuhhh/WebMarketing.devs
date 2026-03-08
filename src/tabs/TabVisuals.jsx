export default function TabVisuals() {
  return (<>
    <h1 className="page-title">Візуальні матеріали</h1>
    <p className="page-desc">Візуали — перше що бачить клієнт. Сильна картинка = вищий CTR, більше збережень, краща запамʼятовуваність.</p>
    <div className="tags">{['Пости','Stories','Візитки','Банери','Логотип','Canva'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    <div className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80')`}}/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="hero-eyebrow">🖼️ Дизайн</div>
        <div className="hero-title">Візуали що зупиняють<br/>скрол</div>
        <div className="hero-desc">Шаблони, принципи, приклади — все що потрібно для сильного візуального бренду</div>
        <div className="hero-tags">{['Без дизайнера','Canva','Шаблони'].map(t=><span key={t} className="hero-tag">{t}</span>)}</div>
      </div>
    </div>

    {/* Visual principles */}
    <div className="g3">
      {[['⬜','Простота','Менше — більше. 1 ідея = 1 пост. Не перевантажуй.'],['🎨','Колір','2-3 фірмових кольори. Контраст для тексту на фото.'],['✍️','Типографіка','Не більше 2 шрифтів. Великий заголовок + дрібний текст.'],['📐','Відступи','Повітря у дизайні — ознака якості. Не бійся пустого місця.'],['🖼️','Зображення','Живі фото > стокові. Люди на фото = вищий engament.'],['📏','Консистентність','Однаковий стиль щотижня будує впізнаваність.']].map(([ico,t,d])=>(
        <div key={t} className="card"><div style={{fontSize:'1.3rem',marginBottom:'.4rem'}}>{ico}</div><div className="sec-title" style={{marginBottom:'.3rem'}}>{t}</div><div className="body-text">{d}</div></div>
      ))}
    </div>

    {/* Phone posts showcase */}
    <div className="card blue">
      <div className="sec-title">📱 Типи постів в Instagram — приклади</div>
      <div className="showcase" style={{marginTop:'1rem'}}>
        {/* Quote post */}
        <div>
          <div style={{fontSize:'.62rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>Цитата</div>
          <div className="insta">
            <div className="insta-head"><div className="insta-ava">M</div><div className="insta-user">marketing_ua</div></div>
            <div className="insta-img" style={{backgroundImage:`url('https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&q=80')`,position:'relative'}}>
              <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.55)',display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem'}}>
                <div style={{textAlign:'center',color:'white'}}>
                  <div style={{fontSize:'.75rem',lineHeight:1.4,fontStyle:'italic',fontFamily:'Georgia,serif',marginBottom:'.3rem'}}>"Найкраща реклама — задоволений клієнт"</div>
                  <div style={{fontSize:'.55rem',opacity:.7}}>— Philip Kotler</div>
                </div>
              </div>
            </div>
            <div className="insta-actions">❤️ 🗨️ ✈️</div>
            <div className="insta-likes">1,234 вподобань</div>
            <div className="insta-caption"><strong>marketing_ua</strong> Збережи щоб не забути 📌</div>
          </div>
        </div>

        {/* Tips carousel */}
        <div>
          <div style={{fontSize:'.62rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>Карусель</div>
          <div className="insta">
            <div className="insta-head"><div className="insta-ava">M</div><div className="insta-user">marketing_ua</div></div>
            <div className="insta-img" style={{background:'#1a1a2e',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'1rem',textAlign:'center'}}>
              <div style={{fontSize:'.6rem',color:'rgba(255,255,255,.5)',marginBottom:'.3rem',textTransform:'uppercase',letterSpacing:'.1em'}}>5 правил</div>
              <div style={{fontSize:'.75rem',fontWeight:700,color:'white',lineHeight:1.3}}>Маркетингу який продає</div>
              <div style={{fontSize:'.55rem',color:'rgba(255,255,255,.4)',marginTop:'.4rem'}}>Гортай →</div>
            </div>
            <div className="insta-actions">❤️ 🗨️ ✈️ 🔖</div>
            <div className="insta-likes">892 вподобань</div>
            <div className="insta-caption"><strong>marketing_ua</strong> Збережи — знадобиться 🔖 #маркетинг</div>
          </div>
        </div>

        {/* Product */}
        <div>
          <div style={{fontSize:'.62rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>Продукт</div>
          <div className="insta">
            <div className="insta-head"><div className="insta-ava">☕</div><div className="insta-user">vohon.cafe</div></div>
            <div className="insta-img" style={{backgroundImage:`url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80')`}}/>
            <div className="insta-actions">❤️ 🗨️ ✈️</div>
            <div className="insta-likes">567 вподобань</div>
            <div className="insta-caption"><strong>vohon.cafe</strong> Ранковий флет з карамельним сиропом ☕ Тільки свіжообсмажені зерна. Вул. Соборна 12</div>
          </div>
        </div>

        {/* Story style */}
        <div>
          <div style={{fontSize:'.62rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>Stories</div>
          <div className="phone" style={{minHeight:'300px',width:'160px'}}>
            <div className="phone-notch"><div className="phone-notch-dot"/></div>
            <div style={{flex:1,backgroundImage:`url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80')`,backgroundSize:'cover',backgroundPosition:'center',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'.5rem'}}>
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(0,0,0,.3),transparent,rgba(0,0,0,.5))'}}/>
              <div style={{position:'relative',zIndex:1,display:'flex',alignItems:'center',gap:'.3rem'}}>
                <div style={{width:20,height:20,borderRadius:'50%',background:'linear-gradient(135deg,#f09433,#bc1888)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.5rem',color:'white'}}>M</div>
                <div style={{fontSize:'.55rem',color:'white',fontWeight:600}}>marketing_ua</div>
              </div>
              <div style={{position:'relative',zIndex:1,textAlign:'center'}}>
                <div style={{fontSize:'.75rem',fontWeight:700,color:'white',lineHeight:1.3,marginBottom:'.3rem'}}>Питання дня:</div>
                <div style={{fontSize:'.62rem',color:'rgba(255,255,255,.9)',marginBottom:'.4rem'}}>Скільки постів на тиждень ти публікуєш?</div>
                <div style={{display:'flex',gap:'.3rem',justifyContent:'center'}}>
                  {['1-2','3-4','5-7','7+'].map(o=><div key={o} style={{background:'rgba(255,255,255,.25)',border:'1px solid rgba(255,255,255,.4)',borderRadius:'50px',padding:'.12rem .4rem',fontSize:'.55rem',color:'white'}}>{o}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="tip">
      <div className="tip-label">🎨 Секрет гарного дизайну без дизайнера</div>
      <div className="tip-text">Обери 3 кольори + 2 шрифти і ніколи не відходь від них. Зроби 5-7 шаблонів у Canva і просто міняй текст та фото. <strong>Постійність важливіша за різноманіття.</strong></div>
    </div>
  </>);
}
