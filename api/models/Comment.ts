const { DataTypes } = require('sequelize')
import { Model } from 'sequelize'
import sequelize from '../db/sequelizeConfig'

type CommentAttributes = {
    comment: string
    email: string
}
class Comment extends Model<CommentAttributes> {
    declare comment: string
    declare email: string
}

Comment.init(
    {
        comment: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize,
    }
)

// `sequelize.define` also returns the model
console.log(Comment === sequelize.models.Comment) // true
console.log(Comment) // true
;(async () => {
    await sequelize.sync()
    // Code here
})()

export default Comment
