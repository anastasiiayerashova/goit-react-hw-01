import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";

export default function TransactionHistory({ items }) {
    return (
      <table className={css.table}>
  <thead className={css.thead}>
    <tr className={css.titles}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody>  
                {items.map(({id, type, amount, currency}) => {
                   return  <TransactionHistoryItem amount={amount}
                            key={id}
                            type={type}
                            currency={currency} />
                })} 
                </tbody>
        </table>
    )
}