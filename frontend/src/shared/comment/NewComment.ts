import { Expose } from 'class-transformer'
import { IsEnum, IsMongoId, IsOptional, Length, IsUrl, Matches } from 'class-validator'
import { ObjectId } from 'mongodb'



import { TargetType } from './TargetType'
import { SubjectCategory } from './SubjectCategory'
import { CommentUserVote } from './CommentUserVote'

export class NewCommentInputs {
  @Expose()
  @IsOptional()
  @Length(2, 100)
  title?: string

  @Expose()
  @IsOptional()
  @Length(2, 10000, { message: 'Comment must be longer than 2 characters' })
  content?: string

  @Expose()
  @IsOptional()
  @IsEnum(TargetType)
  commentType?: TargetType

  @Expose()
  @IsOptional()
  @IsEnum(TargetType)
  targetType?: TargetType

  @Expose()
  @IsOptional()
  @IsMongoId()
  targetId?: ObjectId

  @Expose()
  @IsOptional()
  @Length(2, 100)
  subjectCategory?: SubjectCategory

  @Expose()
  @IsOptional()
  @Length(8, 100)
  @IsUrl()
  @Matches(/^https:\/\/b2.aesurance.io\/file\/[a-zA-Z0-9_.\/-]*/, {
    message: 'Image URL must be from aesurance.io',
  })
  contentImage?: string

  @Expose()
  @IsOptional()
  @Length(8, 100)
  @IsUrl()
  @Matches(/^https:\/\/b2.aesurance.io\/file\/[a-zA-Z0-9_.\/-]*/, {
    message: 'Image URL must be from aesurance.io',
  })
  titleImage?: string
}

export class NewCommentOutputs {
  @Expose()
  commentUserVote!: CommentUserVote
}
