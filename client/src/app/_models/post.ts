import { Photo } from "./photo"

export interface Post {
    id: number
    title: string
    photoUrl: string
    content: string
    datePublished: Date
    photos: Photo[]
  }