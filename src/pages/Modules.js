import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccordionComponent from "../moduldetails/moduldetails";

const Moduledit= () => {
    const [selectedModule, setSelectedModule] = useState("module1");

    const handleModuleChange = (event) => {
        setSelectedModule(event.target.value);
        
    };

    return (
        <Grid container spacing={2} style={{ padding: '5px 0px' }} >
            <Grid item xs={12} style={{ margin: '10px 30px' }} >
                <FormControl >
                    <Typography variant="body2" style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        Select The Module:
                    </Typography>
                
                    <Select 
                        labelId="module-label"
                        id="module-select"
                        value={selectedModule}
                        onChange={handleModuleChange}
                        style={{ width:'200px', marginBottom: '10px', fontWeight: 'bold' }}
                    >
                        <MenuItem value="module1">Security</MenuItem>
                        <MenuItem value="module2">Module 2</MenuItem>
                        <MenuItem value="module3">Module 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid  container item xs={12}  style={{justifyContent:'space-around'}}>
                <Grid item xs={12} >
                    <AccordionComponent />
                </Grid>
            
            </Grid>

        </Grid>
    );
};

export default Moduledit;