import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const CommentComponent = () => {
    const [comment, setComment] = useState('');
    const [expanded, setExpanded] = useState(false);

    const handleChange = (event) => {
        setComment(event.target.value);
    };


    const handleSendComment = () => {
        const commentData = {
            comment: comment
        };
        axios.post('/backend/comment', commentData)
            .then(response => {
                // Check if the response indicates success
                if (response.status === 200) {

                    setExpanded(false); // Close the accordion after sending the comment

                    console.log('Comment sent successfully.');
                } else {
                    console.error('Failed to send comment. Unexpected response:', response);
                    // Optionally, show an error message to the user
                }
            })

            .catch(error => {
                console.error('Error sending comment:', error);

            });
        setComment('');
    };


    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            padding: '5px 20px',
            marginTop: '20px',
            backgroundColor: '#f9f9f9',
            maxWidth: '700px'
        }}>
            <Typography
                variant="h6"
                style={{
                    marginBottom: '10px',
                    cursor: 'pointer',
                    color: '#333',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}
                onClick={toggleExpanded}
            >
                Add Comment :
            </Typography>
            {expanded && (
                <>
                    <TextField
                        value={comment}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        style={{ marginBottom: '10px' }}
                        InputProps={{ style: { borderRadius: '8px' } }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon />}
                            style={{ textTransform: 'none', borderRadius: '8px' }}
                            onClick={handleSendComment}
                        >
                            Send
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CommentComponent;
