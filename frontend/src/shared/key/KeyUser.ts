import { Expose } from "class-transformer"
import { IsOptional } from "class-validator"

import { PublicUser } from "../user/PublicUser"
import { Key } from "./Key"

export class KeyUser {
    @Expose()
    key!: Key
  
    @Expose()
    @IsOptional()
    user?: PublicUser
}
  