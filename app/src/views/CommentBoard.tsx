import { Card, CircularProgress } from '@mui/material'
import { Suspense, useState } from 'react'
import CommentCard from '../components/Comment'
import useFetch from '../hooks/useFetch'
import NewCommentBox from '../Layouts/NewCommentBox'

export interface CommentData {
    comment: string
    email: string
}

const CommentBoard: React.FC = (props) => {
    const [url, setUrl] = useState<string>('http://localhost:3000/comment/')
    const [loading, setLoading] = useState<boolean>(false)
    const { data, error } = useFetch(url, setLoading)

    const [currentCommentData, setCurrentCommentData] = useState<{
        comment: string
        email: string
        id: string
    }>({ comment: '', email: '', id: '' })
    const [isEditing, setIsEditing] = useState<boolean>(false)

    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : (
                <Card>
                    <NewCommentBox
                        currentCommentData={currentCommentData}
                        setCurrentCommentData={setCurrentCommentData}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        setUrl={setUrl}
                        setLoading={setLoading}
                    />
                    {data
                        ? data.map((comment: CommentData & { id: string }) => {
                              return (
                                  <CommentCard
                                      commentData={comment}
                                      setCurrentCommentData={
                                          setCurrentCommentData
                                      }
                                      setIsEditing={setIsEditing}
                                      setLoading={setLoading}
                                  />
                              )
                          })
                        : null}
                </Card>
            )}
        </div>
    )
}

export default CommentBoard
