type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/profile ', label: 'profile' },
  { href: '/bookings ', label: 'bookings' },
  { href: '/rentals/create ', label: 'create rental' }

];