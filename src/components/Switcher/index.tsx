import React from 'react';
import Switch from '@material-ui/core/Switch';

type Props = {
  isChecked?: boolean
}

const Switcher = ({ isChecked }: Props) => {
  return (<Switch
    checked={isChecked}
  />)
}

export default Switcher
