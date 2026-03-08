import { TABS } from '../../constants';
export default function Sidebar({ active, onChange, open, onClose }) {
  return (
    <>
      <div
        className={`sidebar-backdrop${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`sidebar${open ? '' : ' closed'}`}>
        <div className="sidebar-label">Маркетинг</div>
        {TABS.map((t, i) => (
          <button key={t.id} className={`tab-btn${active === t.id ? ' active' : ''}`}
            onClick={() => { onChange(t.id); onClose(); }}
            style={{ animation: 'slideIn .3s ease both', animationDelay: `${i * .022}s` }}>
            {t.label}
          </button>
        ))}
      </aside>
    </>
  );
}
