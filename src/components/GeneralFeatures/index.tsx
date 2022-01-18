import React from 'react'
import { Switcher } from '..'
import { Box, Typography } from '@material-ui/core'
import { GeneralFeaturesType } from '../../types/generalFeatures.types'

type Props = {
    features: Array<GeneralFeaturesType>
}

const GeneralFeatures = ({ features }: Props) => {

    const renderItem = (item: GeneralFeaturesType) => {

        const { status, name } = item
        return (
            <Box color='white'>
                <Typography>{name}</Typography>
                <Switcher isChecked={status} />
            </Box>
        )
    }

    return (
        <Box width='100%'>
            <Typography>General</Typography>
            {features.map((item: GeneralFeaturesType, index: number) => {
                return (
                    <Box key={`k${index}`}>
                        {renderItem(item)}
                    </Box>
                )
            })}
        </Box>
    )
}

export default GeneralFeatures