import { cn } from '@/lib/utils'
import * as React from 'react'
import { ClipLoader } from 'react-spinners'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'default' | 'secondary'
  size?: 'default' | 'sm'
  isLoading?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  isLoading,
  children,
  ...props }) => {
  const buttonClass = cn(
    "rounded-md transition duration-200 font-semibold text-xl font-poppins shadow-btn disabled:cursor-not-allowed",
    variant === 'default' && "bg-primary text-white hover:bg-primary/70",
    variant === 'secondary' && "bg-white text-primary hover:bg-white/90",
    size === 'default' && "px-[35px] py-[14px]",
    size === 'sm' && "px-7 py-2 text-md",
    className
  )

  return (
    <button
      className={buttonClass}
      disabled={isLoading}
      {...props}>
        {isLoading ? "Loading.." : children }
    </button>
  )
}

export default Button