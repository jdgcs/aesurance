import { Length } from 'class-validator'
import { Expose } from 'class-transformer'

export class GetGoogleImagesInputs {
  @Expose()
  @Length(2, 100)
  subject!: string
}

export class GetGoogleImagesOutputs {
  @Expose()
  images!: string[]
}
