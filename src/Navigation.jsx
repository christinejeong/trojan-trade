export default function Navigation({ onNavigate }) {
  return (
    <nav className="navbar navbar-light px-3" style={{ backgroundColor: '#FFC72C' }}>
      <a
        className="navbar-brand"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('home'); // Navigate to the home page
        }}
      >
        Trojan Trade
      </a>
      <div className="nav-links d-inline mx-2">
        <a
          className="nav-link d-inline mx-2"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('listings'); // Navigate to the listings page
          }}
        >
          Listings
        </a>
        <a
          className="nav-link d-inline mx-2"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('cart'); // Navigate to the cart page
          }}
        >
          Liked
        </a>
        <a
          className="nav-link d-inline mx-2"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('profile'); // Navigate to the profile page
          }}
        >
          My Profile
        </a>
      </div>
    </nav>
  );
}
