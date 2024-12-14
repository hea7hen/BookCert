import Link from 'next/link'
import Image from 'next/image'

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 5, title: "Atomic Habits", author: "James Clear" },
  { id: 6, title: "How to Build a Billion Dollar App", author: "George Berkowski" },
]

export default function Books() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64 w-full">
              <Image
                src={`/placeholder.svg?height=300&width=200&text=${encodeURIComponent(book.title)}`}
                alt={`Cover of ${book.title}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-4">{book.author}</p>
              <Link href={`/books/${book.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block">
                Start Reading
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

