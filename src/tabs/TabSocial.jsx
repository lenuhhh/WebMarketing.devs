export default function TabSocial() {
  return (<>
    <h1 className="page-title">Соціальні мережі</h1>
    <p className="page-desc">Кожна платформа — це окрема аудиторія зі своїми правилами. Не копіюй контент між мережами — адаптуй.</p>
    <div className="tags">{['Instagram','TikTok','LinkedIn','Facebook','Telegram','YouTube'].map(t=><span key={t} className="tag">{t}</span>)}</div>

    {/* Phone mockups showcase */}
    <div className="card green">
      <div className="sec-title">📱 Як виглядає контент у телефоні</div>
      <div className="body-text" style={{marginBottom:'1rem'}}>Прокрути щоб побачити різні формати постів для різних платформ</div>
      <div className="showcase">

        {/* Instagram post */}
        <div>
          <div style={{fontSize:'.65rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>Instagram</div>
          <div className="insta">
            <div className="insta-head">
              <div className="insta-ava">N</div>
              <div><div className="insta-user">nova.agency</div></div>
            </div>
            <div className="insta-img" style={{backgroundImage:`url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80')`}}/>
            <div className="insta-actions">❤️ 🗨️ ✈️</div>
            <div className="insta-likes">234 вподобань</div>
            <div className="insta-caption"><strong>nova.agency</strong> 5 помилок, які вбивають ваш маркетинг 🚫 Зберіть і виправте сьогодні... <span style={{color:'#888'}}>ще</span></div>
          </div>
        </div>

        {/* Instagram story-style phone */}
        <div>
          <div style={{fontSize:'.65rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>Reels / TikTok</div>
          <div className="phone">
            <div className="phone-notch"><div className="phone-notch-dot"/></div>
            <div className="phone-img" style={{backgroundImage:`url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80')`,height:'220px'}}/>
            <div className="phone-body">
              <div style={{fontSize:'.65rem',fontWeight:700,color:'#1a1a1a'}}>@marketing_ua</div>
              <div style={{fontSize:'.62rem',color:'#333',lineHeight:1.4}}>Як отримати 1000 підписників за 7 днів без реклами 🔥</div>
              <div style={{display:'flex',gap:'.5rem',marginTop:'auto',paddingTop:'.35rem',borderTop:'1px solid #f0f0f0'}}>
                <span style={{fontSize:'.58rem',color:'#888'}}>❤️ 4.2k</span>
                <span style={{fontSize:'.58rem',color:'#888'}}>💬 312</span>
                <span style={{fontSize:'.58rem',color:'#888'}}>↗️ 890</span>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn post */}
        <div>
          <div style={{fontSize:'.65rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>LinkedIn</div>
          <div className="phone">
            <div className="phone-notch"><div className="phone-notch-dot"/></div>
            <div className="phone-body" style={{padding:'1rem .75rem',gap:'.4rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'.4rem'}}>
                <div style={{width:30,height:30,borderRadius:4,background:'#0077b5',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'.7rem',fontWeight:700}}>А</div>
                <div><div style={{fontSize:'.62rem',fontWeight:700}}>Андрій Ковальчук</div><div style={{fontSize:'.55rem',color:'#888'}}>CEO at StartUp UA · 2г</div></div>
              </div>
              <div style={{fontSize:'.62rem',color:'#1a1a1a',lineHeight:1.5}}>Провів 100 переговорів з клієнтами і виявив: всі вони купували не продукт, а впевненість в результаті.</div>
              <div style={{fontSize:'.62rem',fontWeight:700,color:'#1a1a1a'}}>Як продавати впевненість, а не характеристики?</div>
              <div style={{fontSize:'.62rem',color:'#1a1a1a',lineHeight:1.45}}>1/ Говори про результат, не процес{'\n'}2/ Покажи кейси, не портфоліо{'\n'}3/ Давай гарантії, не обіцянки</div>
              <div style={{display:'flex',gap:'.4rem',marginTop:'.2rem',paddingTop:'.3rem',borderTop:'1px solid #e8e8e8'}}>
                <span style={{fontSize:'.58rem',color:'#888'}}>👍 847</span>
                <span style={{fontSize:'.58rem',color:'#888'}}>💬 156 коментарів</span>
              </div>
            </div>
          </div>
        </div>

        {/* Telegram */}
        <div>
          <div style={{fontSize:'.65rem',fontWeight:700,color:'var(--muted)',marginBottom:'.4rem',textAlign:'center',textTransform:'uppercase',letterSpacing:'.08em'}}>Telegram</div>
          <div className="phone">
            <div className="phone-notch"><div className="phone-notch-dot"/></div>
            <div style={{background:'#efede8',flex:1,padding:'.5rem .5rem',display:'flex',flexDirection:'column',gap:'.4rem'}}>
              <div style={{background:'#1a1a1a',borderRadius:'0 8px 8px 8px',padding:'.5rem .65rem',maxWidth:'90%'}}>
                <div style={{fontSize:'.6rem',fontWeight:700,color:'#f0ece4',marginBottom:'.2rem'}}>Marketing Daily</div>
                <div style={{fontSize:'.6rem',color:'#d0c8bc',lineHeight:1.5}}>📊 Факт дня: компанії з активним блогом отримують на <strong style={{color:'#f0c674'}}>67% більше</strong> лідів на місяць.</div>
              </div>
              <div style={{background:'#1a1a1a',borderRadius:'0 8px 8px 8px',padding:'.5rem .65rem',maxWidth:'85%',marginTop:'.2rem'}}>
                <div style={{fontSize:'.6rem',color:'#d0c8bc',lineHeight:1.5}}>🔑 Інструмент тижня: Notion як CRM для фрілансера. Шаблон — за посиланням нижче 👇</div>
                <div style={{fontSize:'.55rem',color:'#888',marginTop:'.2rem'}}>2.4k переглядів · 156 репостів</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Platform comparison */}
    <div className="g2">
      {[
        {ico:'📸',name:'Instagram',color:'blue',best:['Бʼюті та мода','Їжа та кулінарія','Фітнес та здоровʼя','Подорожі','Малий бізнес'],format:'Reels, Карусель, Сторіс',time:'Вт-Пт 11-13, 17-20'},
        {ico:'🎵',name:'TikTok',color:'red',best:['Освіта (EdTech)','Розваги','DIY та майстер-класи','Бʼюті','Їжа'],format:'Вертикальне відео 15-60 сек',time:'Вт-Чт 19-23, Пт-Вс 15-23'},
        {ico:'💼',name:'LinkedIn',color:'indigo',best:['B2B послуги','HR та рекрутинг','Консалтинг','IT та Tech','Навчання'],format:'Текст + картка, Відео, Статті',time:'Вт-Чт 8-10, 12-14'},
        {ico:'💬',name:'Telegram',color:'teal',best:['Новини та аналітика','IT ком\'юніті','Освіта','Фінанси','Локальний бізнес'],format:'Текст, медіа, опитування',time:'8-10, 12-14, 20-22'},
      ].map(({ico,name,color,best,format,time})=>(
        <div key={name} className={`card ${color}`}>
          <div style={{display:'flex',alignItems:'center',gap:'.5rem',marginBottom:'.75rem'}}>
            <span style={{fontSize:'1.5rem'}}>{ico}</span>
            <div className="sec-title" style={{margin:0}}>{name}</div>
          </div>
          <div className="body-text" style={{marginBottom:'.5rem'}}><strong>Підходить для:</strong></div>
          <ul className="checklist" style={{marginBottom:'.75rem'}}>
            {best.map(b=><li key={b} className="check-item"><span className="check-ico ok">✓</span>{b}</li>)}
          </ul>
          <div style={{display:'flex',flexDirection:'column',gap:'.2rem'}}>
            <div style={{fontSize:'.72rem',color:'var(--text3)'}}><strong>Формат:</strong> {format}</div>
            <div style={{fontSize:'.72rem',color:'var(--text3)'}}><strong>Кращий час:</strong> {time}</div>
          </div>
        </div>
      ))}
    </div>
  </>);
}
