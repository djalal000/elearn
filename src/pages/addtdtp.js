import React, { useState, useRef } from 'react';
import { FormControl, Select, MenuItem, TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import axios from 'axios';

const Addtdtp = ({ chapterId }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName('');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    // Create a JSON object containing the form data
    const formData = {
      selectedOption,
      name,
      file: file ? file.name : null,
      fileName,
      chapterId

    };

    
    axios.post('your-backend-api-url', formData)
      .then(response => {
        console.log(' data sent successfully:', response.data);
        setSelectedOption('');
        setName('');
        setFile(null);
        setFileName('');
      })
      .catch(error => {
        console.error('Error sending  data:', error);
      });
  };


  return (
    <div  style={{ borderRadius: '10px',marginTop:'10px',padding: '30px',Width:'600px',height:'300px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <FormControl style={{ width: '100%', marginBottom: '20px' }}>
      <Typography variant="h5" component="div" color="textSecondary" >
        <AddToPhotosIcon /> 
    </Typography>
    
        <Select
          value={selectedOption}
          onChange={handleChange}
          variant="outlined"
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null,
            PaperProps: {
              style: {
                marginTop: '8px'
              }
            }
          }}
        >
        
          
          <MenuItem value="td">TD</MenuItem>
          <MenuItem value="tp">TP</MenuItem>
          <MenuItem value="mooc">Devoir</MenuItem>
          <MenuItem value="mooc">MOOC</MenuItem>
          <MenuItem value="lienexterne">ressource</MenuItem>
        </Select>
      </FormControl>
      
      <div>
        <TextField
          style={{ marginBottom: '20px', width: '100%' }}
          label="title"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        </div>
        <div  style={{width:'100%',height:'90px',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
        <Button
          variant="contained"
          onClick={handleUploadClick}
          style={{ marginBottom: '20px', width: '100%',height:'100%', backgroundColor: '#007bff', color: '#fff' }}
        >
          <Typography variant="h5" component="div" color="textSecondary"  style={{fontSize:'10px',color:'white'}} >Upload file</Typography>
        </Button>
        {fileName && <Typography style={{ fontWeight: 'bold', marginBottom: '10px'}}>{fileName}</Typography>}
      <Button 
      size="small"
        variant="contained" 
        onClick={handleSubmit} 
        style={{ backgroundColor: '#007bff', color: '#fff', width: '70px' }}
      >
        insert
      </Button>
      </div>
    </div>
  );
}

export default Addtdtp;
