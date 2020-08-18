import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categoria?_embed=videos`

function getAllWithVideos() {
    return fetch(URL_CATEGORIES)
        .then(async (response) => {

            if (response.ok) {
                const resp = await response.json()

                return resp
            }

            throw new Error('Não foi possível pegar os dados :(')
        })
}

export default {
    getAllWithVideos
}