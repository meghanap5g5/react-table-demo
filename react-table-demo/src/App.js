// import logo from './logo.svg';
import './App.css';
import customersData from './components/MOCK_DATA.json';
import CustomersInfo from './components/CustomersInfo';

function App() {
  return (
    <div className="App">
      <CustomersInfo cust_data={customersData} />
    </div>
  );
}

export default App;
