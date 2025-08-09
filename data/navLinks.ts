// @data/navLinks.ts

export interface NavLink {
  name: string;
  href?: string; // optional if it's a dropdown
  megaMenu?: {
    title?: string;
    description?: string;
    links: { name: string; href: string }[];
  }[];
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Scan', href: '/scan' },
  { name: 'Contact', href: '/contact' },
  { name: 'Rates', href: '/rates' },
  { name: 'Remote Help', href: '/remote-help' },

];

export default navLinks;
