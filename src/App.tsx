import React, { useEffect, useState } from 'react';
import './App.css';
import { useGetGeneralFeatures } from './hooks/useGeneralFeatures'
import { isEmpty } from 'lodash'
import { GeneralFeatures } from './components'
import {Box} from '@material-ui/core'
function App() {

  const [generalFeatures, setFeatures] = useState([])
  const { features: generalFeaturesData, getData } = useGetGeneralFeatures()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    !isEmpty(generalFeaturesData) && setFeatures(generalFeaturesData)
  }, [generalFeaturesData])

  return (
    <Box className="App" bgcolor='black' height={'100%'}>
      {!isEmpty(generalFeatures) && (<GeneralFeatures features={generalFeatures} />)}
    </Box>
  );
}

export default App;
