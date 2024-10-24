import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem({type, amount, currency }) {
    return (
        <tr className={css.titles}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}