import { Expose } from 'class-transformer'
import { IsArray, IsMongoId } from 'class-validator'
import { ObjectId } from 'mongodb'

import { KeyUser } from './KeyUser'

export class GetSellersInputs {
  @Expose()
  @IsMongoId()
  insuranceId!: ObjectId
}

export class GetSellersOutputs {
  @Expose()
  @IsArray()
  keyUsers!: KeyUser[]
}
