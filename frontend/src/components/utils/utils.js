//const BACKEND_URI_ROOT = `http://localhost:4000/`
const BACKEND_URI_ROOT = `https://three7-app.onrender.com/`
const SURVEY_DATA_SECTION = 'survey_data/'

export const getTime_str = () => {
    const date = new Date();
    const date_string = `${convert_to_two_digits(date.getHours())}:${convert_to_two_digits(date.getMinutes())}:${convert_to_two_digits(date.getSeconds())}`
    return date_string
}

const convert_to_two_digits = (time_value) => {
    const value = time_value < 10 ? '0'+time_value : time_value
    return value
}

export const backEndUris = {
    allSurveysData: BACKEND_URI_ROOT+SURVEY_DATA_SECTION,
    specificSurveyData: (id) => {return BACKEND_URI_ROOT+SURVEY_DATA_SECTION+id},
    barchartData: BACKEND_URI_ROOT+'barchartData/'
}

export const request_headers = (method, data) => {
    return {
        method:method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }
}

export const survey_obj = {
    random_number: '',
    age: '',
    gender: '',
    religion: '',
    day_hour: ''
}