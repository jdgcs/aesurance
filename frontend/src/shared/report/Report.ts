import { IsDate, IsEnum, IsMongoId, IsOptional, Length } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Index, Property } from '../../helpers/typegoose'
import { ModerationStatus } from '../comment/ModerationStatus'
import { TargetType } from '../comment/TargetType'

@Index({ moderationStatus: 1 })
export class Report {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true })
  @IsEnum(TargetType)
  targetType!: TargetType

  @Property({ required: true })
  @IsMongoId()
  targetId!: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 10000)
  reason?: string

  @Property({ required: true, default: ModerationStatus.PENDING })
  @IsEnum(ModerationStatus)
  moderationStatus!: ModerationStatus

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsMongoId()
  moderatorId?: ObjectId
  
  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const ReportModel = getModel(Report, { schemaOptions: { timestamps: true } })
