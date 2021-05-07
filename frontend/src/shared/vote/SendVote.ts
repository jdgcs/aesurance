import { Expose } from 'class-transformer'
import { IsEnum, IsMongoId } from 'class-validator'
import { ObjectId } from 'mongodb'

import { VoteDirection } from './VoteDirection'

export class SendVoteInputs {
  @Expose()
  @IsMongoId()
  commentId!: ObjectId

  @Expose()
  @IsEnum(VoteDirection)
  voteDirection!: VoteDirection
}

export class SendVoteOutputs {}
