import React from 'react'
import Link from 'next/link';
import { FcAbout } from "react-icons/fc";
import { Button } from '../ui/button';
const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <FcAbout className='w-6 h-6' />
      </Link>
    </Button>
  )
}

export default Logo