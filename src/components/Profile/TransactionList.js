import React, { Component } from 'react';

import Transaction from './Transaction';

class TransactionList extends Component {
  renderTransactions() {
    if (this.props.transactions) {
      const { transactions } = this.props;
      return (
        transactions.map((transaction, index) =>
          <Transaction {...this.props} transaction={transaction} key={index} />
        )
      )
    } else {
      return;
    }
  }
  render() {

    return (
      <div className="transaction-list">
        <div className="transaction-list-header">
          <p>{` Recent Transactions `}</p>
        </div>
        {this.renderTransactions()}
      </div>
    )
  }
}

export default TransactionList;
