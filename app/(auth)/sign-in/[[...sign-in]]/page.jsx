import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="relative">
        <Image
          src="/login.jpg"
          alt="Login illustration"
          width={600}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Prince</h1>
          <SignIn />
        </div>
      </div>
    </div>
  )
}
