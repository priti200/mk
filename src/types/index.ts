import { AnimationControls } from "framer-motion"

export interface ServiceCardProps {
  title: string
  description: string
  icon: string
  isHighlighted?: boolean
  index: number
}

export interface Service {
  title: string
  description: string
  icon: string
  isHighlighted?: boolean
}

export interface AnimatedTitleProps {
  controls: AnimationControls
}

