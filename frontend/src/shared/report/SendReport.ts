import { Expose } from 'class-transformer'
import { IsEnum, IsMongoId, IsOptional, Length } from 'class-validator'
import { ObjectId } from 'mongodb'

import { TargetType } from '../comment/TargetType'
import { Report } from './Report'

export class SendReportInputs {
  @Expose()
  @IsEnum(TargetType)
  targetType!: TargetType

  @Expose()
  @IsMongoId()
  targetId!: ObjectId

  @Expose()
  @IsOptional()
  @Length(2, 10000)
  reason?: string
}

export class SendReportOutputs {
  @Expose()
  report!: Report
}
