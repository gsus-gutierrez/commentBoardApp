import { Model } from "sequelize";

type CommentAttributes = {
    comment: string;
    email: string;
}
class Comment extends Model<CommentAttributes>{
    declare comment: string;
    declare email: string;
}

export default Comment