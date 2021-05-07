import { IsDate, IsEnum, IsMongoId, IsOptional } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Index, Property } from '../../helpers/typegoose'
import { VoteDirection } from './VoteDirection'

@Index({ userId: 1, commentId: 1 }, { unique: true })
@Index({ userId: 1, commentId: 1, voteDirection: 1 }, { unique: true })
export class Vote {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ required: true, ref: 'Comment' })
  @IsMongoId()
  commentId!: ObjectId

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsEnum(VoteDirection)
  voteDirection?: VoteDirection

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const VoteModel = getModel(Vote, { schemaOptions: { timestamps: true } })
