import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="text-xl font-logo text-primary">kalasetu</div>
          <p className="mt-3 text-sm text-foreground/70 max-w-xs">
            Connecting skilled artisans with buyers while preserving heritage crafts and empowering communities.
          </p>
          <div className="mt-4 flex items-center gap-3 text-foreground/70">
            <a href="#" aria-label="instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Menu</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="/about" className="hover:text-primary">About Us</a></li>
            <li><a href="/discover" className="hover:text-primary">Discover Products</a></li>
            <li><a href="/stories" className="hover:text-primary">Stories</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Help</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-primary">Support</a></li>
            <li><a href="#" className="hover:text-primary">FAQ</a></li>
            <li><a href="#" className="hover:text-primary">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>44 Orchard, NY City, USA</li>
            <li>kalasetu@email.com</li>
            <li>+1-585-555-6588</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-foreground/60">
        Copyright © kalasetu 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
