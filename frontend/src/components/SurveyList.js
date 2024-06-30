import { useEffect, useState } from "react";
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom';

export default function SurveyList() {
    const [surveys, setSurveys] = useState([])
    const navigate = useNavigate()

    const loadSurveys = async () => {
        const response = await fetch('http://localhost:4000/survey_data/');
        const data = await response.json()
        //console.log(data);
        setSurveys(data)
    }

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:4000/survey_data/${id}`,{
                method:"DELETE"
            })
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
                            <Typography>{survey.random_number}</Typography>
                            <Typography>{survey.gender}</Typography>
                            <Typography>{survey.age}</Typography>
                            <Typography>{survey.religion}</Typography>
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