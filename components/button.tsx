import { cn } from '@/lib/utils'
import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'default' | 'secondary'
  size?: 'default' | 'sm'
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  isLoading,
  ...props }) => {
  const buttonClass = cn(
    "rounded-md transition duration-200 font-semibold text-xl font-poppins",
    variant === 'default' && "bg-primary text-white hover:bg-primary/70",
    variant === 'secondary' && "bg-white text-primary hover:bg-white/90",
    size === 'default' && "px-[35px] py-[14px]",
    size === 'sm' && "px-7 py-2",
    className
  )

  return (
    <button
      className={buttonClass}
      disabled={isLoading}
      {...props} />
  )
}

export default Button