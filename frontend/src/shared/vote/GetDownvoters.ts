import { Expose } from 'class-transformer'
import { IsArray, IsInt, IsMongoId, IsOptional, Max, Min } from 'class-validator'
import { ObjectId } from 'mongodb'

import { PublicUser } from '../user/PublicUser'

export class GetDownvotersInputs {
  @Expose()
  @IsMongoId()
  commentId!: ObjectId

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100000)
  pageDownvoters?: number
}

export class GetDownvotersOutputs {
  @Expose()
  @IsArray()
  downvoters!: PublicUser[]
}
