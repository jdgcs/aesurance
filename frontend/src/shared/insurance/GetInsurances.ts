import { Expose } from 'class-transformer'
import { IsArray } from 'class-validator'

import { Insurance } from './Insurance'

export class GetInsurancesInputs {
}

export class GetInsurancesOutputs {
  @Expose()
  @IsArray()
  insurances!: Insurance[]
}
