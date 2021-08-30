
import css from './TransactionHistory.module.css';

import PropTypes from 'prop-types';

function TransactionHistory({ items}) {
    return (
          <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr >
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th >Currency</th>
        </tr>
      </thead>

            <tbody className={css.body}>
        {items.map(item => (
          <tr className={css.bodyItem} key={item.id}>
            <td className={css.type}>{item.type}</td>
            <td className={css.amount}>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
    
export default TransactionHistory