import { Expose } from "class-transformer"
import { IsOptional } from "class-validator"

import { PublicUser } from "../user/PublicUser"
import { Vote } from "../vote/Vote"
import { Comment } from "./Comment"

export class CommentUserVote {
    @Expose()
    comment!: Comment
  
    @Expose()
    @IsOptional()
    user?: PublicUser
  
    @Expose()
    @IsOptional()
    vote?: Vote
}
  