import { Expose } from 'class-transformer'
import { IsInt, IsPositive } from 'class-validator'

export class GetBalanceInputs {}

export class GetBalanceOutputs {
  @Expose()
  @IsInt()
  @IsPositive()
  balance!: number
}
