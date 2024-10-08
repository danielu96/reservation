type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/profile ', label: 'profile' },
  { href: '/bookings ', label: 'bookings' },
  { href: '/reviews ', label: 'reviews' },
  { href: '/reservations', label: 'reservations' },
  { href: '/rentals/create ', label: 'create rental' },
  { href: '/rentals', label: 'rentals' },
  { href: '/admin', label: 'admin' },
];