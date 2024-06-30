import {React, useState, useEffect} from 'react'
import {Button, Card, CardContent, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function SomeForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [task, setTask] = useState({
        title:'',
        description:'',
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        /*const res = await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        const data = await res.json()
        console.log(data);*/
        //console.log(task);
        setLoading(false)
        navigate('/')
        
    };
    const handleChange = e => {
        //console.log(e.target.name, e.target.value);
        setTask({...task, [e.target.name]: e.target.value})
        //console.log(task);
    };

  return (
    <Grid 
        direction='column'
        container alignItems='center' 
        justifyContent='center'>
        <Grid item xs={3}
    >
            <Card
                sx={{mt:5}}
                style={{backgroundColor:'#1e272e',
                        padding:'1rem'
                }}
            >
                <Typography variant='5' textAlign='center' color='white'>Create Some</Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant='filled'
                            label='Write your title'
                            sx={{
                                display:'block',
                                margin:'.5rem 0'
                            }}
                            name='title'
                            onChange={handleChange}
                            inputProps={{style:{color:"white"}}}
                            InputLabelProps={{style:{color:"white"}}}
                        />
                        <TextField
                            label='Write'
                            variant='filled'
                            multiline
                            rows={4}
                            sx={{
                                display:'block',
                                margin:'.5rem 0'
                            }}
                            name='description'
                            onChange={handleChange}
                            inputProps={{style:{color:"white"}}}
                            InputLabelProps={{style:{color:"white"}}}
                        />

                        <Button variant='contained' 
                                color='primary'
                                type='submit'
                                disabled={!task.title || !task.description}>
                            {loading ? <CircularProgress
                                color='inherit' 
                                size={24}/> : 'Guardar'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}
