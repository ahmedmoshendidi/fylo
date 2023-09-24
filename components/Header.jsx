export default function Header() {
  return (
    <header className="header">
      <img src="/images/logo.svg" alt="fylo-logo" />
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="list__item">Features</li>
          <li className="list__item">Team</li>
          <li className="list__item">Sign In</li>
        </ul>
      </nav>
    </header>
  );
}
