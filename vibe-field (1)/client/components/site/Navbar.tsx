import { Menu, Search, ShoppingBag } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? "text-accent-foreground" : "text-white/90 hover:text-white"
      }`
    }
  >
    {children}
  </NavLink>
);

function AboutLink(){
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAbout = () => {
    const doScroll = () => {
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 160);
    } else {
      doScroll();
    }
  };

  return (
    <button onClick={scrollToAbout} className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white">
      About Us
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/70 border-b border-primary/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2Fcf7826249fee470387a38d4bea69a206?format=webp&width=400" alt="kalasetu logo" className="h-24 md:h-28 w-auto object-contain transform translate-y-3 md:translate-y-4" style={{display: 'block'}} />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-white">Home</Link>
            <NavItem to="/discover">Discover products</NavItem>
            <AboutLink />
            <NavItem to="/stories">Stories</NavItem>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden lg:flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground/80 shadow-soft hover:shadow-card">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
          <button className="relative rounded-full p-2 hover:bg-secondary">
            <ShoppingBag className="h-5 w-5 text-white" />
          </button>
          <a href="/login-signup-page.html?tab=login" className="hidden sm:inline-flex ml-1 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft hover:shadow-card">Login</a>
          <a href="/login-signup-page.html?tab=signup" className="ml-1 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft hover:shadow-card">Sign up</a>
          <button className="md:hidden inline-flex p-2 rounded-md hover:bg-secondary" aria-label="menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
