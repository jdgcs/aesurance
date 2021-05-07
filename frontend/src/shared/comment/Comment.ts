import { IsBoolean, IsDate, IsEnum, IsInt, IsMongoId, IsOptional, Length, IsUrl, Matches } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Index, Property } from '../../helpers/typegoose'
import { ModerationStatus } from './ModerationStatus'
import { TargetType } from './TargetType'
import { SubjectCategory } from './SubjectCategory'

@Index({ targetId: 1, isVisible: 1 })
@Index({ moderationStatus: 1 })
export class Comment {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, default: TargetType.COMMENT })
  @IsEnum(TargetType)
  commentType!: TargetType

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsEnum(TargetType)
  targetType?: TargetType

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsMongoId()
  targetId?: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ nullable: true, optional: true, default: undefined })
  @IsOptional()
  @IsMongoId({ each: true })
  replyIds?: ObjectId[]

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 100)
  title?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 100)
  slug?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 10000, { message: 'Comment must be longer than 2 characters' })
  content?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsEnum(SubjectCategory)
  subjectCategory?: SubjectCategory

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsBoolean()
  sticky?: boolean

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(8, 100)
  @IsUrl()
  @Matches(/^https:\/\/b2.aesurance.io\/file\/[a-zA-Z0-9_.\/-]*/, {
    message: 'Image URL must be from aesurance.io',
  })
  contentImage?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(8, 100)
  @IsUrl()
  @Matches(/^https:\/\/b2.aesurance.io\/file\/[a-zA-Z0-9_.\/-]*|https:\/\/encrypted-tbn0.gstatic.com\/images\?q=[a-zA-Z0-9_.\/:_-]*/, {
    message: 'Image URL must be from aesurance.io or google',
  })
  titleImage?: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsInt()
  viewCount?: number

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsInt()
  replyCount?: number

  @Property({ nullable: true, default: 1 })
  @IsOptional()
  @IsInt()
  upCount?: number

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsInt()
  downCount?: number

  @Property({ required: true, default: ModerationStatus.PENDING })
  @IsEnum(ModerationStatus)
  moderationStatus!: ModerationStatus

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsMongoId()
  moderatorId?: ObjectId

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsBoolean()
  isVisible?: boolean

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsDate()
  lastReply?: Date

  @IsDate()
  createdAt?: Date

  @IsDate()
  updatedAt?: Date
}

export const CommentModel = getModel(Comment, { schemaOptions: { timestamps: true } })
