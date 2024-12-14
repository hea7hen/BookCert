import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Book Completion Certification</h1>
      <p className="mb-8">Read books, take assessments, and earn certifications!</p>
      <Link href="/books" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Explore Books
      </Link>
    </div>
  )
}

