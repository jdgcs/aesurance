import { IsDate, IsEnum, IsInt, IsMongoId, IsOptional, Length } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'
import { TargetType } from '../comment/TargetType'
import { NotificationType } from './NotificationType'

export class Notification {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 100)
  data?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsMongoId()
  targetId?: ObjectId

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsEnum(TargetType)
  targetType?: TargetType

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 100)
  targetName?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 100)
  targetUrl?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsInt()
  count?: number

  @Property({ required: true })
  @IsEnum(NotificationType)
  notificationType!: NotificationType

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const NotificationModel = getModel(Notification, { schemaOptions: { timestamps: true } })
