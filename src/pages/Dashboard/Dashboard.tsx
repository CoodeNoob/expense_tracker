import './Dashboard.css'
import CategoryUsedTable from './CategoryUsedTable/CategoryUsedTable'

function Dashboard() {
  let amount = 10000;  


  let formatCurrency = (amt) => amt.toLocaleString('en-US', { style: 'currency', currency: 'INR' });

  return (
    <div className='content'>
      <h1 className="dashboard-greeting">Hello, Swan Htet</h1>
      <div className="status_cards_container">
        <div className="card">
          <div className="card_name">
            Balance
          </div>
          <div className="card_status">
            {formatCurrency(amount)}
          </div>
        </div>
        <div className="card">
          <div className="card_name">
            Income t/Month
          </div>
          <div className="card_status">
            ₹ 100
          </div>
        </div>
        <div className="card">
          <div className="card_name">
            Expense t/Month
          </div>
          <div className="card_status">
            ₹ 100
          </div>
        </div>
        <div className="card">
          <div className="card_name">
            Total Expenses
          </div>
          <div className="card_status">
            ₹ 20000
          </div>
        </div>
      </div>
      {/* Status Table  */}
      <h2 className="dashboard-section-title">Expenses Used By Category</h2>
      <div className="category_used_table_list">
      <CategoryUsedTable/>
      <CategoryUsedTable/>
      </div>
      <h2 className="dashboard-section-title">Quick Actions</h2>
      <div className="actions_list_container">
        <div className="action_card">
          <div className="action_icon">
              +
          </div>
          <div className="action_name">
              Add Expense
          </div>
        </div>
        <div className="action_card">
          <div className="action_icon">
              +
          </div>
          <div className="action_name">
              Add Depense
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
