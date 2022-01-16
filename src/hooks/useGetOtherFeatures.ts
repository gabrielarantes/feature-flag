import React, { useState, useMemo } from 'react'
import ax from '../config/axiosConfig'

export const useGetOtherFeatures = () => {

    const [features, setFeatures] = useState([])

    const getData = async () => {
        try {
            await ax.get('OtherFeatures.json').then(res => {
                setFeatures(res.data)
            })
        } catch (e) {
            
        }
    }


    return { getData, features }
}
