import { IsMongoId } from 'class-validator'
import { Expose } from 'class-transformer'
import { ObjectId } from 'mongodb'
import { CommentUserVote } from './CommentUserVote'

export class GetCommentInputs {
  @Expose()
  @IsMongoId()
  commentId!: ObjectId
}

export class GetCommentOutputs {
  @Expose()
  commentUserVote!: CommentUserVote
}
