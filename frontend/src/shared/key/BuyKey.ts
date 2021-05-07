import { Expose } from 'class-transformer'
import { IsMongoId } from 'class-validator'
import { ObjectId } from 'mongodb'

import { Key } from './Key'

export class BuyKeyInputs {
  @Expose()
  @IsMongoId()
  keyId!: ObjectId
}


export class BuyKeyOutputs {
  @Expose()
  key!: Key

  @Expose()
  transactionHash!: string
}
