import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Book Cert App
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/books">Explore Books</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/community">Community</Link></li>
        </ul>
      </nav>
    </header>
  )
}

