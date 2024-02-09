import axios from 'axios';

export const instaApi = async () => {
    const token = 'IGQWRNYzRMM0dJUzg1Vm1QOG5FZA05jNTE5REZALV1JrRGVKZAnBNREljYllBeGNuNmQ1dkZALNl9HalZAva3BsN3RBU2FfdUNiU3NvLXo3U016RUdTRGQ1eWg2V19iVG0wR0J5Mll0ZA29NM1p3MnJOZAWZAtNnNEUHhRTEkZD'
    const url = `https://graph.instagram.com/me/media?access_token=${token}`

    // try {
    //     const response = await axios.get(url)
    //     console.log(response)
    //     return response.data
    // } catch (error) {
    //     console.error('Erro ao obter dados do Instagram:', error)
    //     throw error
    // }
};

