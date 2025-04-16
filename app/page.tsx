'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// ✅ Client-safe way to generate UUID in browser
function generateUUID() {
  return crypto.randomUUID()
}

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    console.log('🏠 HER homepage mounted. Generating chat ID...')
    const id = generateUUID()
    console.log('🔁 Redirecting to /chat/' + id)
    router.replace(`/chat/${id}`)
  }, [router])

  return <p style={{ color: '#fff', textAlign: 'center', paddingTop: '50vh' }}>Loading HER...</p>
}
