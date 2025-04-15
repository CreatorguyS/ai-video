'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { Users } from './config/schema'
import { eq } from 'drizzle-orm'
import { db } from './config/db' // Make sure you import your DB instance
// import { DevBundlerService } from './config/devBundler' // Adjust import if needed

function Provider({ children }) {
  const { user } = useUser()

  const isNewUser = async () => {
    const result = await DevBundlerService.select().from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))

    if (!result[0]) {
      await db.insert(Users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl
      })
    }
  }

  useEffect(() => {
    if (user) isNewUser()
  }, [user])

  return <div>{children}</div>
}

export default Provider
