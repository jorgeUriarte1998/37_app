export const getTime_str = () => {
    const date = new Date();
    console.log(date.getSeconds());
    const date_string = `${convert_to_two_digits(date.getHours())}:${convert_to_two_digits(date.getMinutes())}:${convert_to_two_digits(date.getSeconds())}`
    return date_string
}

const convert_to_two_digits = (time_value) => {
    const value = time_value < 10 ? '0'+time_value : time_value
    return value
}