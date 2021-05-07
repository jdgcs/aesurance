import { Expose } from 'class-transformer'
import { IsMongoId, IsPositive, Length, Max } from 'class-validator'
import { ObjectId } from 'mongodb'

import { Key } from './Key'

export class NewKeyInputs {
  @Expose()
  @IsMongoId()
  insuranceId!: ObjectId

  @Expose()
  @IsPositive()
  @Max(1000)
  price!: number

  @Expose()
  @Length(5, 30)
  key!: string
}

export class NewKeyOutputs {
  @Expose()
  key!: Key
}
