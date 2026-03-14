import './NavLink.css';

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} className="nav-link" onClick={onClick}>
      {children}
    </a>
  );
}

export default NavLink;
