import { Button } from '@/components/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p>Lais Tattoo</p>
    <Button text="saiba mais" href='https://www.instagram.com/laiss.tattoo/' target='_blank'></Button>
     
    </main>
  )
}
