import { useState, useRef } from 'react';
import './styles/index.css';
import { TABS, PROGRESS_STEPS } from './constants';
import Header  from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer  from './components/layout/Footer';
import {
  TabIntro, TabBranding, TabPositioning, TabTarget, TabContent,
  TabSocial, TabPosting, TabClients, TabFunnel, TabVisuals,
  TabEmail, TabAds, TabAnalytics, TabNetworking, TabSystem,
} from './tabs';

function Placeholder({ tab }) {
  return (
    <div className="m-placeholder" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'5rem 2rem',textAlign:'center',color:'var(--faint)',gap:'.875rem'}}>
      <div style={{fontSize:'3rem'}}>🚧</div>
      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.25rem',fontWeight:600,color:'var(--muted)'}}>{tab?.label}</h2>
      <p style={{fontSize:'.82rem',maxWidth:'320px'}}>Розділ готується. Додайте компонент у <code style={{background:'var(--bg-card)',padding:'.1rem .35rem',borderRadius:'4px',fontSize:'.75rem'}}>src/tabs/</code></p>
    </div>
  );
}

export default function App() {
  const [active,   setActive]   = useState('intro');
  const [sidebar,  setSidebar]  = useState(true);
  const [expanded, setExpanded] = useState({});
  const [animKey,  setAnimKey]  = useState(0);
  const mainRef = useRef(null);

  const toggle = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));

  const navigate = (id) => {
    setActive(id);
    setAnimKey(k => k + 1);
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const idx  = TABS.findIndex(t => t.id === active);
  const step = Math.floor((idx / TABS.length) * PROGRESS_STEPS.length);

  const renderTab = () => {
    const props = { expanded, toggle };
    switch (active) {
      case 'intro':       return <TabIntro />;
      case 'branding':    return <TabBranding />;
      case 'positioning': return <TabPositioning />;
      case 'target':      return <TabTarget />;
      case 'content':     return <TabContent />;
      case 'social':      return <TabSocial />;
      case 'posting':     return <TabPosting />;
      case 'clients':     return <TabClients />;
      case 'funnel':      return <TabFunnel />;
      case 'visuals':     return <TabVisuals />;
      case 'email':       return <TabEmail />;
      case 'ads':         return <TabAds />;
      case 'analytics':   return <TabAnalytics />;
      case 'networking':  return <TabNetworking />;
      case 'system':      return <TabSystem />;
      default:            return <Placeholder tab={TABS.find(t => t.id === active)} />;
    }
  };

  return (
    <div className="app">
      <Header open={sidebar} onToggle={() => setSidebar(v => !v)} />

      <div className="progress">
        {PROGRESS_STEPS.map((s, i) => (
          <div key={i} className={`prog-item${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}>
            <div className="prog-dot">{i < step ? '✓' : i + 1}</div>
            <div className="prog-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="body">
        <Sidebar active={active} onChange={navigate} open={sidebar} onClose={() => setSidebar(false)} />

        <main className="main" ref={mainRef}>
          <div key={animKey} className="tab-content">
            {renderTab()}
          </div>

          <div className="nav">
            <button className="nav-btn" onClick={() => idx > 0 && navigate(TABS[idx-1].id)} disabled={idx === 0}>← Назад</button>
            <span className="nav-counter">{idx + 1} / {TABS.length}</span>
            <button className="nav-btn" onClick={() => idx < TABS.length-1 && navigate(TABS[idx+1].id)} disabled={idx === TABS.length-1}>Далі →</button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
