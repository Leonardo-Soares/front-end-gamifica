import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import HeaderMobile from '@components/HeaderMobile'
import React, { useState } from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex-1 flex flex-col'>
      {window.innerWidth >= 991 ?
        <Header />
        :
        <HeaderMobile />
      }
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
