import { useRef, useEffect } from 'react';
import { TABS } from '../../constants';

export default function Header({ active, onChange }) {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeEl = nav.querySelector('.nav-tab.active');
    if (activeEl) {
      activeEl.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }
  }, [active]);

  return (
    <header className="header">
      <div className="header-top">
        <div className="brand">
          <div className="logo">M</div>
          <div>
            <div className="brand-title">Marketing ULTIMATE</div>
            <div className="brand-sub">🇺🇦 Повна система · 14 розділів</div>
          </div>
        </div>
      </div>
      <nav className="tab-nav" ref={navRef}>
        {TABS.map((t, i) => {
          const isActive = t.id === active;
          const emoji = t.label.match(/^\S+/)?.[0] ?? '';
          const text  = t.label.replace(/^\S+\s*/, '');
          return (
            <button
              key={t.id}
              className={`nav-tab${isActive ? ' active' : ''}`}
              onClick={() => onChange(t.id)}
            >
              <div className="nav-dot">{isActive ? emoji : i + 1}</div>
              <span className="nav-tab-label">{text}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
