'use client'

import { useState, useEffect } from 'react'
import Certificate from '../components/Certificate'

interface CertificateData {
  bookId: string
  bookTitle: string
  completionDate: string
}

export default function Profile() {
  const [certificates, setCertificates] = useState<CertificateData[]>([])
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateData | null>(null)

  useEffect(() => {
    const storedCertificates = JSON.parse(localStorage.getItem('certificates') || '[]')
    setCertificates(storedCertificates)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <h2 className="text-2xl font-semibold mb-2">Your Certifications</h2>
      {certificates.length > 0 ? (
        <div>
          <ul className="list-disc pl-5 mb-4">
            {certificates.map((cert, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="text-blue-600 hover:underline"
                >
                  {cert.bookTitle}
                </button>
              </li>
            ))}
          </ul>
          {selectedCertificate && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Selected Certificate</h3>
              <Certificate
                recipientName="John Doe" // Replace with actual user name
                bookTitle={selectedCertificate.bookTitle}
                completionDate={selectedCertificate.completionDate}
              />
            </div>
          )}
        </div>
      ) : (
        <p>You haven't earned any certifications yet.</p>
      )}
    </div>
  )
}

