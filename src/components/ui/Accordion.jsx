import { IconChevron } from './Icons';

export default function Accordion({ id, emoji, title, sub, children, expanded, onToggle }) {
  const isOpen = !!expanded[id];
  return (
    <div className={`acc${isOpen ? ' open' : ''}`}>
      <button className="acc-head" onClick={() => onToggle(id)}>
        <div className="acc-left">
          <span className="acc-emoji">{emoji}</span>
          <div><div className="acc-title">{title}</div>{sub && <div className="acc-sub">{sub}</div>}</div>
        </div>
        <IconChevron open={isOpen} />
      </button>
      {isOpen && <div className="acc-body">{children}</div>}
    </div>
  );
}
