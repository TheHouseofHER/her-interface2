'use client'

// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const id = uuidv4()
    router.replace(`/chat/${id}`)
  }, [router])

  return null
}
