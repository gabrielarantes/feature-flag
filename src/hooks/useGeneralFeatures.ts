import React, { useState, useMemo } from 'react'
import ax from '../config/axiosConfig'

export const useGetGeneralFeatures = () => {

    const [features, setFeatures] = useState([])

    const getData = async () => {
        try {
            await ax.get('generalFeatures.json').then(res => {
                setFeatures(res.data)
            })
        } catch (e) {

        }
    }


    return { getData, features }
}
