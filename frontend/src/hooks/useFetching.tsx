import { useState } from 'react'

export const useFetching = (callback: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>()
}
