import { Expose } from 'class-transformer'

import { Stat } from './Stat'

export class GetStatsInputs {}

export class GetStatsOutputs {
  @Expose()
  stats!: Stat[]
}
