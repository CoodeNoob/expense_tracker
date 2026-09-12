import './CategoryUsedTable.css'

const transactions = [
  {
    description: 'Lunch',
    category: 'Food & Dining',
    date: '12 Sep 2026',
    amount: '₹250',
    icon: '🍜',
    tone: 'food',
  },
  {
    description: 'Bus',
    category: 'Transport',
    date: '11 Sep 2026',
    amount: '₹50',
    icon: '🚌',
    tone: 'transport',
  },
]

function CategoryUsedTable() {
  return (
    <section className="category-used-table" aria-labelledby="recent-expenses-title">
      <header className="category-used-table__header">
        <div>
          <p className="category-used-table__eyebrow">Overview</p>
          <h2 id="recent-expenses-title">Recent expenses this month</h2>
        </div>
        <button className="category-used-table__view-all" type="button">
          View all <span aria-hidden="true">→</span>
        </button>
      </header>

      <div className="category-used-table__scroll-area">
        <table>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Date</th>
              <th scope="col" className="category-used-table__amount-heading">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={`${transaction.description}-${transaction.date}`}>
                <td data-label="Description">
                  <span>1</span>
                </td>
                <td data-label="Description">
                  <div className="category-used-table__description">
                    <span className={`category-used-table__icon category-used-table__icon--${transaction.tone}`} aria-hidden="true">
                      {transaction.icon}
                    </span>
                    <span>{transaction.description}</span>
                  </div>
                </td>
                <td data-label="Category">
                  <span className={`category-used-table__tag category-used-table__tag--${transaction.tone}`}>
                    {transaction.category}
                  </span>
                </td>
                <td data-label="Date" className="category-used-table__date">{transaction.date}</td>
                <td data-label="Amount" className="category-used-table__amount">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CategoryUsedTable
