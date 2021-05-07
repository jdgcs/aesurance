import { IsDate, IsEnum, IsInt, IsMongoId, IsOptional } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'
import { SubjectCategory } from '../comment/SubjectCategory'
import { StatType } from './StatType'

export class Stat {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true })
  @IsEnum(StatType)
  statType!: StatType

  @Property({ required: true })
  @IsInt()
  count!: number

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsEnum(SubjectCategory)
  subjectCategory?: SubjectCategory

  @IsDate()
  createdAt?: Date

  @IsDate()
  updatedAt?: Date
}

export const StatModel = getModel(Stat, { schemaOptions: { timestamps: true } })
