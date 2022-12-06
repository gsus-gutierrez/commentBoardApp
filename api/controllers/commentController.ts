import Comment from "../models/Comment"


export const createComment = async (comment: string, email: string) => {
    try {
        console.log(comment, email)
        const newComment: Comment = await Comment.create({ comment, email })
        return newComment
    } catch (error) {
        console.error(error)
    }

}

export const updateComment = async (id: string, comment: string, email: string) => {
    try {

        const commentInstance: Comment | null = await getComment(id)
        return await commentInstance?.update({ comment, email })
    } catch (error) {
        console.error(error)
        throw new Error('Error while updating comment')
    }
}
export const deleteComment = async (id: string): Promise<void> => {
    try {

        const commentInstance: Comment | null = await getComment(id)
        return await commentInstance?.destroy()
    } catch (error) {
        console.error(error)
        throw new Error('Error while deleting comment')
    }
}
export const getComment = async (id: string): Promise<Comment | null> => {
    try {
        const comment: Comment | null = await Comment.findByPk(id)
        if (!comment) throw new Error('No comment found')
        return comment
    } catch (error) {
        console.error(error)
        throw new Error('Error while finding comment')
    }

}

export const getComments = async (): Promise<Comment[] | null> => {
    try {
        const comments: Comment[] | null = await Comment.findAll()
        if (!comments) throw new Error('No comment found')
        return comments
    } catch (error) {
        console.error(error)
        throw new Error('Error while finding comment')
    }

}

