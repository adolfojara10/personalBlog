import { PhotoProject } from "./photoProject"

export interface Project {
    id: number
    title: string
    photoUrl: string
    content: string
    datePublished: Date
    photos: PhotoProject[]
  }