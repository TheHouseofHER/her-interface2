'use client'

import { useParams } from 'next/navigation'

export default function ChatPage() {
  const params = useParams()
  const id = params?.id

  if (!id) return <div>Loading your sacred space...</div>

  return (
    <div style={{ padding: '50px', fontSize: '20px' }}>
      <p>Welcome to HER — your chat ID is: {id}</p>
    </div>
  )
}
