'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

// DEBUG LOG
console.log('🏠 Home page loaded — preparing to redirect to /chat/[id]')

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const id = uuidv4()
    console.log('🚀 Redirecting to chat ID:', id)
    router.replace(`/chat/${id}`)
  }, [router])

  return null
}
