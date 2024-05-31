import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Addtdtp from '../pages/addtdtp';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import { ExpandMore, InsertDriveFile } from '@mui/icons-material';
import chapters from './chapters.json';
import { TextField } from '@mui/material';
import axios from 'axios';

function AccordionComponent() {
  const [showAddtdtp, setShowAddtdtp] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState('');

  const handleOpen = () => {
    setShowAddtdtp(true);
  };
  const handleClose = () => {
    setShowAddtdtp(false);
  };

  const handleChange = (chapterTitle) => {
    setExpandedAccordion(chapterTitle === expandedAccordion ? '' : chapterTitle);
  }
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      try {

        const response = await axios.post('/backend-api-endpoint', {
          text: textFieldValue
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div style={{ padding: '30px', borderRadius: '2px', maxWidth: '1000px', backgroundColor: '#F2F3F7', marginTop: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography style={{ fontWeight: 'bold', fontSize: '18px' }}>Module:Details:</Typography>

          <TextField
            style={{ marginBottom: '20px', width: '30%' }}
            label="+ add cour"
            variant="outlined"
            value={textFieldValue}
            onChange={(event) => setTextFieldValue(event.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        {chapters.map((chapter, index) => (
          <Accordion
            key={index}
            expanded={expandedAccordion === chapter.title}
            onChange={() => handleChange(chapter.title)}
            sx={{
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              '&::before': {
                boxShadow: 'none'
              },
              marginTop: '15px',
              padding: '15px',
            }}

          >
            <AccordionSummary expandIcon={<ExpandMore />}  >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '98%' }}>
                <Typography style={{ fontWeight: 'bold' }}>{chapter.title}</Typography>

                <AddIcon onClick={handleOpen} style={{
                  fontWeight: 'bold', backgroundColor: '#04aa6d', display: 'flex', justifyContent: 'center',
                  padding: '', borderRadius: '50%',
                  alignItems: 'center', cursor: 'pointer', fontSize: '18px'
                }} />
              </div>

            </AccordionSummary>
            <AccordionDetails>
              <div>
                {chapter.links.map((link, linkIndex) => (
                  <Box
                    key={linkIndex}
                    sx={{
                      border: '0.5px solid #ccc',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      marginBottom: '10px',
                      padding: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <InsertDriveFile style={{ marginRight: '10px' }} />
                      <Typography>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'rgb(27,117,208)', textDecoration: 'none' }}
                        >
                          {link.name}
                        </a>
                      </Typography>
                    </div>
                    <div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Typography>{link.despose_date}</Typography>

                      </div>
                    </div>
                  </Box>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <Dialog open={showAddtdtp} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <Addtdtp />
        </DialogContent>

      </Dialog>
    </>
  );
}

export default AccordionComponent;