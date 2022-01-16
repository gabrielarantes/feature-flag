import React, { useEffect, useState } from 'react';
import './App.css';
import { useGetGeneralFeatures } from './hooks/useGeneralFeatures'
import { Switcher } from './components'
import {isEmpty} from 'lodash'

function App() {

  const [features, setFeatures] = useState([])
  const { features: data, getData } = useGetGeneralFeatures()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    !isEmpty(data) && setFeatures(data)
  }, [data])

  //console.log(generalFeatures)

  return (
    <div className="App">
      <header className="App-header">


        <Switcher isChecked={false} />

      </header>
    </div>
  );
}

export default App;
