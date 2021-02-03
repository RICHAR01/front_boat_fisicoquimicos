import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Loading from 'components/Loading';
import Message from 'components/Message';
import Data from 'components/Data';
import Loan from 'components/Loan';
import Card from 'components/Card';

import { getPendingLoans, rejectLoan, approveLoan } from './actions';
import { makeSelectPendingLoans, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { AdminContainer, Column } from './styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class Admin extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.fetchPendingLoans();
  }

  render() {
    const { pendingLoans, loading, error, onRejectClick, onApproveClick } = this.props;
console.log('pendingLoand:',pendingLoans)
    let loansNode = null;
    const loanIdString = '_id';

    if (loading) {
      loansNode = (<Loading size={25} />);
    } else if (error) {
      loansNode = (
        <Message
          title={'Advertencia'}
          subtitle={'No se logró cargar préstamos por validar'}
        />
      );
    } else if (pendingLoans) {
      const loansList = pendingLoans.map((loan) =>
        (
          <Data
            key={loan[loanIdString]}
            {...loan}
          >
          </Data>
        )
      );
      const loansMsg = (
        <Message
          title={'Préstamos vacío'}
          subtitle={'No se tienen préstamos por validar'}
        />
      );
      loansNode = pendingLoans.length ? loansList : loansMsg;
    }

    return (
      <div>
        <Helmet>
          <title>Admin - Easycredit</title>
        </Helmet>
        <AdminContainer>
          <Column>
            <Card title="Préstamos por validar"></Card>
            <Paper >
             <Table >
               <TableHead>
                 <TableRow>
                   <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                 </TableRow>
                 </TableHead>
                <TableBody>
                 {loansNode}
                </TableBody>
             </Table>
    </Paper>
          </Column>
        </AdminContainer>
      </div>
    );
  }
}

Admin.propTypes = {
  pendingLoans: PropTypes.array,
  loading: PropTypes.boolean,
  error: PropTypes.boolean,
  onRejectClick: PropTypes.func,
  onApproveClick: PropTypes.func,
  fetchPendingLoans: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchPendingLoans: () => dispatch(getPendingLoans()),
    onRejectClick: (loanId) => dispatch(rejectLoan(loanId)),
    onApproveClick: (loanId) => dispatch(approveLoan(loanId)),
  };
}

const mapStateToProps = createStructuredSelector({
  pendingLoans: makeSelectPendingLoans(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'admin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Admin);
