import { redirect } from 'next/navigation'
import { randomUUID } from 'crypto'

export default function Page() {
  const newId = randomUUID()
  redirect(`/chat/${newId}`)
}
