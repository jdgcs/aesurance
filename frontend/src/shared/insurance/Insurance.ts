// prettier-ignore
import { IsDate, IsMongoId, IsOptional, IsPositive, IsUrl, Length, Matches, Max } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'

export class Insurance {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true })
  @Length(2, 100)
  title!: string

  @Property({ required: true })
  @Length(2, 100)
  @Matches(/^[a-zA-Z0-9_-]*$/, { message: 'Insurance can only contain letters, numbers, dashes and underscores' })
  slug!: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 100)
  @IsUrl()
  image?: string

  @Property({ nullable: true, optional: true })
  @IsPositive()
  @Max(1000)
  retailPrice?: number

  @Property({ nullable: true, optional: true })
  @IsPositive()
  @Max(1000)
  bestPrice?: number

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const InsuranceModel = getModel(Insurance, { schemaOptions: { timestamps: true } })
