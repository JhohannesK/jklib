import type { ReactNode } from "react"

export interface Framework {
  id: string
  name: string
  description: string
  url: string
  logo?: string
  tags: string[]
  stars?: number
  forks?: number
  category: string
}

export interface Category {
  id: string
  name: string
  icon: ReactNode
  items: Framework[]
}

