import { IsMongoId } from 'class-validator'
import { Expose } from 'class-transformer'
import { ObjectId } from 'mongodb'

export class AddCommentViewInputs {
  @Expose()
  @IsMongoId()
  commentId!: ObjectId
}

export class AddCommentViewOutputs {}
