import {React, useEffect, useState} from 'react'
import {Box, Button, Card, CardContent, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography} from '@mui/material'
import {useNavigate, useParams} from 'react-router-dom'
import {getTime_str} from './utils/utils.js'

export default function SurveyForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [editing,setEditing] = useState(false);

    const params = useParams();
    
    const loadSurvey = async (id) => {
        const res = await fetch(`http://localhost:4000/survey_data/${id}`);
        const data = await res.json()
        setSurvey(
            {
                random_number:data.random_number,
                age:data.age,
                gender:data.gender,
                religion:data.religion
            })
        setEditing(true)
    }

    useEffect(() => {
        if (params.id) {
            loadSurvey(params.id)
        }
    },[params.id])

    const [survey, setSurvey] = useState({
        random_number:'',
        age:'',
        gender:'',
        religion:'',
        day_hour:''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        survey.day_hour = getTime_str()
        //setLoading(true)
        if (editing){
            const res = await fetch(`http://localhost:4000/survey_data/${params.id}`,{
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(survey)
            });
            const data = await res.json()
        }
        else{
            /*const res = await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        const data = await res.json()
        console.log(data);*/
        //console.log(task);
        }
        //setLoading(false)
        navigate('/')
        
    };
    const handleChange = e => {
        setSurvey({...survey, [e.target.name]: e.target.value})
    };

  return (
    <Grid 
        direction='column'
        container alignItems='center' 
        justifyContent='center'>
        <Grid item xs={3}>
            <Card
                sx={{mt:5}}
                style={{backgroundColor:'#1e272e',
                        padding:'1rem'
                }}
            >
                <Typography variant='5' textAlign='center' color='white'>Encuesta Número Aleatorio</Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label='Número Aleatorio'
                            variant='filled'
                            sx={{
                                display:'block',
                                margin:'.5rem 0'
                            }}
                            name='random_number'
                            value={survey.random_number}
                            onChange={handleChange}
                            inputProps={{style:{color:"white"}}}
                            InputLabelProps={{style:{color:"white"}}}
                        />
                        <TextField
                            label='Edad'
                            variant='filled'
                            sx={{
                                display:'block',
                                margin:'.5rem 0'
                            }}
                            name='age'
                            value={survey.age}
                            onChange={handleChange}
                            inputProps={{style:{color:"white"}}}
                            InputLabelProps={{style:{color:"white"}}}
                        />
                        <Box 
                            component="section"
                            sx={{
                                margin:'.5rem 0',
                                p:2,
                                borderRadius:2,
                                bgcolor:'#1C252B',
                                boxShadow: 1,
                                }}>
                          <FormControl>
                            <Typography color='white'>Género</Typography>
                            <RadioGroup 
                                name='gender' 
                                aria-labelledby='gender-group-label'
                                defaultValue="Mujer"
                                onChange={handleChange}
                                value={survey.gender}    
                            >
                                <FormControlLabel 
                                    control={<Radio />} 
                                    label={<Typography color='white'>Varón</Typography>} 
                                    value='Hombre' 
                                />
                                <FormControlLabel 
                                    control={<Radio />} 
                                    label={<Typography color='white'>Mujer</Typography>}  
                                    value='Mujer' 
                                />
                                <FormControlLabel 
                                    control={<Radio />} 
                                    label={<Typography color='white'>Otro</Typography>} 
                                    value='Otro' 
                                />
                            </RadioGroup>
                          </FormControl>
                        </Box>

                        <Box>
                            <FormControl  variant="filled" fullWidth >
                                <InputLabel id='religion-picklist-label'> 
                                <Typography color='white'>Religión</Typography>
                                </InputLabel>
                                <Select
                                    labelId='religion-picklist-label'
                                    name='religion'
                                    onChange={handleChange}
                                    value={survey.religion}
                                    MenuProps={
                                        {
                                        sx:{
                                            "& .MuiMenu-paper":{
                                                backgroundColor: "black"
                                            }}
                                        }
                                    }
                                >
                                    <MenuItem
                                        value={'Catolica'}
                                        sx={{ color: 'white' }}
                                    > Católica </MenuItem>
                                    <MenuItem 
                                        value={'Cristiana'}
                                        sx={{ color: 'white' }}
                                    > Cristiana </MenuItem>
                                    <MenuItem value={'Judia'}
                                        sx={{ color: 'white' }}
                                    > Judia </MenuItem>                                    
                                </Select> 
                            </FormControl>
                        </Box>

                        <Button variant='contained' 
                                color='primary'
                                type='submit'
                                // disabled={!task.title || !task.description}
                                >
                            {loading ? (<CircularProgress
                                color='inherit' 
                                size={24}/>) : ('Guardar')}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}
