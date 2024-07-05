import { useEffect, useState } from "react";
import {Button, Card, CardContent, Typography, Box} from '@mui/material'
import {useNavigate} from 'react-router-dom';
import {backEndUris, request_headers} from './utils/utils.js'

export default function SurveyList() {
    const [surveys, setSurveys] = useState([])
    const navigate = useNavigate()

    const loadSurveys = async () => {
        const response = await fetch(backEndUris.allSurveysData);
        const data = await response.json()
        setSurveys(data)
    }

    const handleDelete = async (id) => {
        try {
            await fetch(backEndUris.specificSurveyData(id),request_headers("DELETE",{}))
            setSurveys(surveys.filter(survey => survey.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadSurveys()
    }, [])

    return (
        <>
            <h1>Lista de Encuestas</h1>
            {
                surveys.map(survey => (
                    <Card 
                        style={{
                        marginBottom: '.7rem',
                        backgroundColor: '#1e272e'
                        }}
                        key={survey.id}
                    >
                        <CardContent style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{color:'white'}}>
                            <Typography>
                                <Box 
                                    component="span" 
                                    fontWeight='fontWeightBold'
                                    sx={{color:'#9BA0A0'}}
                                >
                                    Número Aleatorio: </Box>
                                {survey.random_number}
                            </Typography>

                            <Typography>
                                <Box 
                                    component="span" 
                                    fontWeight='fontWeightBold'
                                    sx={{color:'#9BA0A0'}}
                                >
                                    Género: </Box>
                                {survey.gender}
                            </Typography>

                            <Typography>
                                <Box 
                                    component="span" 
                                    fontWeight='fontWeightBold'
                                    sx={{color:'#9BA0A0'}}
                                >
                                    Edad: </Box>
                                {survey.age}
                            </Typography>

                            <Typography>
                                <Box 
                                    component="span" 
                                    fontWeight='fontWeightBold'
                                    sx={{color:'#9BA0A0'}}
                                >
                                    Religión: </Box>
                                {survey.religion}
                            </Typography>
                            </div>

                            <div>
                            <Button 
                                variant='contained' 
                                color="inherit" 
                                onClick={() => navigate(`/surveys/${survey.id}/edit`)}
                            >
                                Editar
                            </Button>
                            <Button
                                variant='contained' 
                                color="warning" 
                                onClick={() => handleDelete(survey.id)}
                                style={{marginLeft:".5rem"}}
                            >
                                Eliminar
                            </Button>
                            </div>

                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}