import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  isChecked?: boolean
}

const Switcher = ({ isChecked }: Props) => {
  return (<Switch
    checked={isChecked}
  />)
}

export default Switcher
