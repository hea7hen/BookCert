import React from 'react'

interface CertificateProps {
  recipientName: string
  bookTitle: string
  completionDate: string
}

const Certificate: React.FC<CertificateProps> = ({ recipientName, bookTitle, completionDate }) => {
  return (
    <div className="certificate border-2 border-gray-800 p-10 text-center bg-white shadow-lg w-full max-w-3xl mx-auto">
      <div className="certificate-title text-3xl mb-6 text-blue-600">
        Certificate of Completion
      </div>
      <div className="certificate-content text-xl mb-8">
        This certificate is presented to<br /><br />
        <strong>{recipientName}</strong><br /><br />
        In recognition of successfully completing the book<br /><br />
        <em>"{bookTitle}"</em><br /><br />
        Dated: {completionDate}
      </div>
      <div className="signature text-right mt-10">
        <div className="signature-line border-t border-gray-800 w-48 ml-auto"></div>
        BookCert Certifications
      </div>
    </div>
  )
}

export default Certificate

