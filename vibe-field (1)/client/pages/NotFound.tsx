import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-secondary/40">
      <div className="text-center">
        <h1 className="font-heading text-6xl">404</h1>
        <p className="mt-3 text-foreground/70">Oops! Page not found</p>
        <a href="/" className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
