import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-block px-8 py-3 font-semibold transition-all duration-300 text-center border-2'
  
  const variantClasses = {
    primary: 'bg-navy-900 border-navy-900 text-white hover:bg-navy-800 hover:border-navy-800',
    secondary: 'bg-navy-900 hover:bg-navy-800 text-white border-navy-900',
    outline:
      'bg-transparent border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
