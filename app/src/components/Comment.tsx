import { Button, Card, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { CommentData } from '../views/CommentBoard'

const CommentCard = (props: {
    commentData: CommentData & { id: string }
    setCurrentCommentData: Dispatch<
        SetStateAction<{ comment: string; email: string; id: string }>
    >
    setIsEditing: Dispatch<SetStateAction<boolean>>
    setLoading: Dispatch<SetStateAction<boolean>>
    setUrl: Dispatch<SetStateAction<string>>
}) => {
    const {
        commentData,
        setCurrentCommentData,
        setIsEditing,
        setLoading,
        setUrl,
    } = props

    const handleSetCurrentComment = () => {
        setCurrentCommentData(commentData)
        setIsEditing(true)
    }

    const handleDeleteComment = () => {
        setUrl('')
        setLoading(true)
        axios
            .delete(`http://localhost:3000/comment/${commentData.id}`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
                setUrl('http://localhost:3000/comment/')
            })
    }

    return (
        <Card
            sx={{
                minWidth: 800,
                borderRadius: '10px',
                padding: '10px',
                textAlign: 'justify',
                margin: '10px',
            }}
        >
            <CardContent>
                <Typography variant="h6" component="div">
                    {commentData.email}
                </Typography>
                {commentData.comment}
                <div>
                    <Button onClick={handleSetCurrentComment}>Edit</Button>
                    <Button onClick={handleDeleteComment}>Delete</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CommentCard
