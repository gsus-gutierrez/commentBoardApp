import { Button, Card, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { CommentData } from '../views/CommentBoard'

const NewCommentBox: React.FC<{
    currentCommentData: CommentData & { id: string }
    setCurrentCommentData: Dispatch<
        SetStateAction<{ comment: string; email: string; id: string }>
    >
    isEditing: boolean
    setIsEditing: Dispatch<SetStateAction<boolean>>
    setUrl: Dispatch<SetStateAction<string>>
    setLoading: Dispatch<SetStateAction<boolean>>
}> = (props) => {
    const {
        currentCommentData,
        setCurrentCommentData,
        isEditing,
        setIsEditing,
        setUrl,
        setLoading,
    } = props

    const handleChangeEmail = (event: { target: { value: string } }) => {
        setCurrentCommentData({
            ...currentCommentData,
            email: event.target.value,
        })
    }

    const handleChangeComment = (event: { target: { value: string } }) => {
        setCurrentCommentData({
            ...currentCommentData,
            comment: event.target.value,
        })
    }

    const handleSendComment = async () => {
        setLoading(true)
        if (isEditing) {
            await axios
                .put(
                    `http://localhost:3000/comment/${currentCommentData.id}`,
                    currentCommentData
                )
                .then((res) => {
                    console.log(res.data)
                    setUrl('')
                })
                .finally(() => {
                    setUrl('http://localhost:3000/comment/')
                    setLoading(false)
                })
        } else {
            await axios
                .post('http://localhost:3000/comment', currentCommentData)
                .then((res) => {
                    console.log(res.data)
                    setUrl('')
                })
                .finally(() => {
                    setUrl('http://localhost:3000/comment/')
                    setLoading(false)
                })
        }
    }

    const handleSetNewComment = () => {
        setIsEditing(false)
    }

    return (
        <Card
            sx={{
                minWidth: 800,
                borderRadius: '10px',
                padding: '30px',
                textAlign: 'justify',
            }}
        >
            <Grid container>
                <Grid item></Grid>
            </Grid>
            <TextField
                label="Email"
                variant="standard"
                disabled={isEditing}
                value={currentCommentData.email}
                onChange={handleChangeEmail}
                sx={{
                    marginBottom: '1em',
                    minWidth: '20em',
                }}
            ></TextField>
            <br></br>
            <TextField
                label="Comment"
                variant="outlined"
                value={currentCommentData.comment}
                onChange={handleChangeComment}
                multiline
                rows={2}
                fullWidth
            ></TextField>
            <div style={{ direction: 'rtl' }}>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '1em',
                        marginLeft: '1em',
                    }}
                    onClick={handleSendComment}
                >
                    {isEditing ? 'Edit' : 'Comment'}
                </Button>
                {isEditing ? (
                    <Button
                        variant="contained"
                        onClick={handleSetNewComment}
                        sx={{
                            marginTop: '1em',
                        }}
                    >
                        New Comment
                    </Button>
                ) : null}
            </div>
        </Card>
    )
}

export default NewCommentBox
