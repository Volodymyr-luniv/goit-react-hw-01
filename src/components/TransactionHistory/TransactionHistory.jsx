import styles from "./TransactionHistory.module.css"; // Імпорт CSS-модуля

const TransactionHistory = ({ items }) => {
	return (
		<table className={styles.transactionTable}>
			<thead>
				<tr className={styles.headerRow}>
					<th className={styles.tableHeader}>Type</th>
					<th className={styles.tableHeader}>Amount</th>
					<th className={styles.tableHeader}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(({ id, type, amount, currency }) => (
					<tr key={id} className={styles.tableRow}>
						<td className={styles.tableData}>{type}</td>
						<td className={styles.tableData}>{amount}</td>
						<td className={styles.tableData}>{currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TransactionHistory;
