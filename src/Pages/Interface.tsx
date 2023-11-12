export interface IFilms {
  Id: string
  Title: string
  CoverImage: string
  TitleImage: string
  Date: string
  ReleaseYear: string
  MpaRating: string
  Category: string
  Duration: string
  VideoUrl: string
  Description: string
}

export interface ICover {
  Id: string
  Title: string
  CoverImage: string
  TitleImage: string
  Date: string
  ReleaseYear: string
  MpaRating: string
  Category: string
  Duration: string
  Description: string
}

export interface IDatas {
  Featured: ICover
  TendingNow: IFilms[]
}

