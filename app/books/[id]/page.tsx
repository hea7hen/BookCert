'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { atomicHabitsContent } from '../atomic-habits-content'
import { billionDollarAppContent } from '../billion-dollar-app-content'

const defaultBookContent = [
  "Page 1 content...",
  "Page 2 content...",
  "Page 3 content...",
  "Page 4 content...",
  "Page 5 content...",
  "Page 6 content...",
]

const bookTitles: { [key: string]: string } = {
  '1': 'To Kill a Mockingbird',
  '2': '1984',
  '3': 'Pride and Prejudice',
  '4': 'The Great Gatsby',
  '5': 'Atomic Habits',
  '6': 'How to Build a Billion Dollar App',
}

export default function BookPage({ params }: { params: { id: string } }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [bookContent, setBookContent] = useState<string[]>([])
  const [isCertificateClaimed, setIsCertificateClaimed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (params.id === '5') {
      setBookContent(atomicHabitsContent)
    } else if (params.id === '6') {
      setBookContent(billionDollarAppContent)
    } else {
      setBookContent(defaultBookContent)
    }
    // Check if the certificate has been claimed
    const claimedCertificates = JSON.parse(localStorage.getItem('claimedCertificates') || '[]')
    setIsCertificateClaimed(claimedCertificates.includes(params.id))
  }, [params.id])

  const handleNextPage = () => {
    if (currentPage < bookContent.length - 2) {
      setCurrentPage(currentPage + 2)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2)
    }
  }

  const handleClaimCertification = () => {
    if (!isCertificateClaimed) {
      const claimedCertificates = JSON.parse(localStorage.getItem('claimedCertificates') || '[]')
      claimedCertificates.push(params.id)
      localStorage.setItem('claimedCertificates', JSON.stringify(claimedCertificates))
      setIsCertificateClaimed(true)
      
      const certificateData = {
        bookId: params.id,
        bookTitle: bookTitles[params.id] || `Book ${params.id}`,
        completionDate: new Date().toLocaleDateString()
      }
      const certificates = JSON.parse(localStorage.getItem('certificates') || '[]')
      certificates.push(certificateData)
      localStorage.setItem('certificates', JSON.stringify(certificates))
      
      router.push('/profile')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <div className="relative h-24 w-16 mr-4">
          <Image
            src={`/placeholder.svg?height=300&width=200&text=${encodeURIComponent(bookTitles[params.id] || `Book ${params.id}`)}`}
            alt={`Cover of ${bookTitles[params.id] || `Book ${params.id}`}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-3xl font-bold">
          {bookTitles[params.id] || `Book ${params.id}`}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="border rounded p-4">
          <p className="whitespace-pre-wrap">{bookContent[currentPage]}</p>
          <div className="text-right text-sm text-gray-500 mt-2">
            Page {currentPage + 1}
          </div>
        </div>
        <div className="border rounded p-4">
          <p className="whitespace-pre-wrap">{bookContent[currentPage + 1] || "End of book"}</p>
          {bookContent[currentPage + 1] && (
            <div className="text-right text-sm text-gray-500 mt-2">
              Page {currentPage + 2}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Pages {currentPage + 1}-{Math.min(currentPage + 2, bookContent.length)} of {bookContent.length}
        </span>
        {currentPage < bookContent.length - 2 ? (
          <button
            onClick={handleNextPage}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleClaimCertification}
            disabled={isCertificateClaimed}
            className={`${
              isCertificateClaimed ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
            } text-white px-4 py-2 rounded`}
          >
            {isCertificateClaimed ? 'Certificate Claimed' : 'Claim Certification'}
          </button>
        )}
      </div>
    </div>
  )
}

