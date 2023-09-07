import { useState, useEffect } from "react"

const useFetch = (url, solo, concerto) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then((data) => {
                if (!concerto) {
                    setData(data.filter((piece) => piece.isConcerto === false))
                } else if (!solo) {
                    setData(data.filter((piece) => piece.isConcerto === true))
                } else {
                    setData(data)
                }
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [url, concerto, solo])

    return { data, isLoading, error }
}

export default useFetch