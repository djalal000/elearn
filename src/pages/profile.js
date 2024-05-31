import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import profiledata from './profiledata.json';
//import axios from 'axios'

const profileBoxStyle = {
    padding: '16px',
    backgroundColor: '#ffffff',
    marginBottom: '16px',

    border: '1px solid #e0e0e0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};


const infoItemStyle = {

    fontSize: '16px',
    marginTop: '7px'
};

const StudentProfilePage = () => {
    const [student, setStudent] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        setStudent(profiledata);
    }, []);

    /*
    useEffect(() => {
      
      const fetchStudentData = async () => {
        try {
          // Make an HTTP GET request to the backend API
          const response = await axios.get('/api/student-profile');
         
          setStudent(response.data);
        } catch (error) {
          console.error('Error fetching student data:', error);
        }
      };
      fetchStudentData();
    
      
    }, []);
    */


    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSendClick = () => {
        console.log('Sending comment:', comment);
        // Perform any other action with the comment
        setComment('');
    };

    if (!student) {
        return <Typography>Loading...</Typography>;
    }
    return (
        <Grid container spacing={2} style={{ padding:'5px 0px'}} >
            <Grid item xs={12} md={4}>
                <Box style={profileBoxStyle}>
                    <Grid item xs={12} style={{ textAlign: 'center' }} >
                        <Avatar style={{
                            margin: '0 auto', width: '90px',
                            height: '90px',
                        }} src={student.pictureUrl} />
                        <Typography variant="h6"  >
                            <span style={{}} >{student.name}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6" style={infoItemStyle}>
                            Email: <br />

                        </Typography>
                        <span style={{ fontSize: '15px' }}>{student.email}</span>
                        <Typography variant="h6" style={infoItemStyle}>
                            Phone: <br />

                        </Typography>
                        <span style={{ fontSize: '15px' }}>{student.phone}</span>
                        <Typography variant="h6" style={infoItemStyle}>
                            Location: <br />

                        </Typography>
                        <span style={{ fontSize: '15px' }}>{student.location}</span>
                        <Typography variant="h6" style={infoItemStyle}>
                            Year <br />
                         
                        </Typography>
                        <span style={{ fontSize: '15px' }}>{student.year}</span>
                    </Grid>

                </Box>

            </Grid>
            
               
            
            <Grid item xs={12} md={4}>
            <Box style={profileBoxStyle}>
                    <Typography variant="h6">Modules:</Typography>
                    {student.modules.map((module) => (
                        <Box key={module.id} style={{ marginBottom: '8px' }}>
                            <RouterLink to={`/moduldetails/moduldetails`}>
                                <Typography variant="body1">{module.name}</Typography>
                            </RouterLink>
                        </Box>
                    ))}
                </Box>
                <Box style={profileBoxStyle}>
                    <Typography variant="h6">Additional Information:</Typography>
                    <Typography variant="body1" style={{ marginTop: '8px' }}>{student.additionalInfo}</Typography>

                    {/* Add comment input and submit button */}
                    <Box style={{ marginTop: '16px' }}>
                        <Typography variant="h6">Leave a comment:</Typography>
                        <textarea
                            style={{ width: '90%', height: '100px', marginBottom: '5px', verticalAlign: 'top' }}
                            placeholder=""
                            value={comment}
                            onChange={handleCommentChange}
                        />
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon style={{ marginLeft: '1px' }} />}
                            style={{ textTransform: 'none', minWidth: 'unset', padding: '3px 5px', marginLeft: '2px' }}
                            onClick={handleSendClick}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};


export default StudentProfilePage;