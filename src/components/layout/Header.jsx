import { IconMenu, IconClose } from '../ui/Icons';
export default function Header({ open, onToggle }) {
  return (
    <header className="header">
      <div className="brand">
        <button className="menu-btn" onClick={onToggle}>{open ? <IconClose/> : <IconMenu/>}</button>
        <div className="logo">M</div>
        <div>
          <div className="brand-title">Marketing ULTIMATE</div>
          <div className="brand-sub">🇺🇦 Повна система · 14 розділів</div>
        </div>
      </div>
    </header>
  );
}
