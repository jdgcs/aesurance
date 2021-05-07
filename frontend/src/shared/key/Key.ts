// prettier-ignore
import { IsDate, IsMongoId, IsOptional, IsPositive, Length, Max } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'

export class Key {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ ref: 'User' })
  @IsMongoId()
  sellerId!: ObjectId

  @Property({ nullable: true, optional: true, ref: 'User' })
  @IsOptional()
  @IsMongoId()
  buyerId?: ObjectId

  @Property({ ref: 'Insurance' })
  @IsMongoId()
  insuranceId!: ObjectId

  @Property()
  @IsPositive()
  @Max(1000)
  price!: number

  @Property()
  @IsOptional()
  @Length(5, 30)
  key?: string

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const KeyModel = getModel(Key, { schemaOptions: { timestamps: true } })
