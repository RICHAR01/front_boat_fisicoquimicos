import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { MessageContainer, Image, Title, Subtitle } from './styles';

class Message extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { fecha, temperatura, ph, longitud, latitud, oxigeno_dis } = this.props;

    return (
      <TableRow >
              <TableCell component="th" scope="row">
                {fecha}
              </TableCell>
              <TableCell align="right">{temperatura}</TableCell>
              <TableCell align="right">{ph}</TableCell>
              <TableCell align="right">{oxigeno_dis}</TableCell>
              <TableCell align="right">{longitud}</TableCell>
              <TableCell align="right">{latitud}</TableCell>

            </TableRow>
    );
  }
}

Message.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Message;
