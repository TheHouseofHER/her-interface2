'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function generateUUID() {
  return crypto.randomUUID()
}

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    console.log('🌈 HER homepage is working!')
    const id = generateUUID()
    console.log('🚀 Redirecting to /chat/' + id)
    router.replace(`/chat/${id}`)
  }, [router])

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to bottom right, #110022, #330044)',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem'
    }}>
      🪞 HER is waking up...
    </div>
  )
}
