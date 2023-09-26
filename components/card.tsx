import * as React from 'react'
import ImageItem from './image-item'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    image: string
    title: string
    description: string
    link: string
    className?: string
}

const Card: React.FC<CardProps> = ({image, title, description, link, className, ...props}) => {
  return (
    <div className={cn('bg-card text-card-foreground rounded-lg', className)} {...props}>
        <ImageItem src={image} alt={title} />

        <div className="p-4 space-y-3">
            <h2 className="text-2xl uppercase text-black">{title}</h2>
            <p className='ellipsis overflow-hidden min-h-[90px]'>{description}</p>
            <Link href={link} className='text-base mt-6 inline-block font-semibold text-black'>READ MORE</Link>
        </div>
    </div>
  )
}

export default Card