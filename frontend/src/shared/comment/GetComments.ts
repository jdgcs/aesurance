import { Expose } from 'class-transformer'
import { IsArray, IsInt, IsMongoId, IsOptional, Max, Min, IsEnum, Length } from 'class-validator'
import { ObjectId } from 'mongodb'

import { TargetType } from './TargetType'
import { CommentUserVote } from './CommentUserVote'
import { SubjectCategory } from './SubjectCategory'

export class GetCommentsInputs {
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
  @IsInt()
  @Min(0)
  @Max(100000)
  page?: number

  @Expose()
  @IsOptional()
  @Length(0, 100)
  search?: string

  @Expose()
  @IsOptional()
  @IsEnum(SubjectCategory)
  subjectCategory?: SubjectCategory
}

export class GetCommentsOutputs {
  @Expose()
  @IsArray()
  commentUserVotes!: CommentUserVote[]
}
