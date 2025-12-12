import Intoduction from './Component/Introduction.jsx';
import Header from './Component/Header.jsx';
import Payment from './Component/Payment.jsx';
import Form from './Component/Form.jsx';
import Table from './Component/Table.jsx';

export default function App() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl w-full mx-auto space-y-10 rounded-2xl shadow-lg p-5 md:p-5">
        <Header />

        <Table />

        <Intoduction />

        <Payment />

        <Form />

        </div>
      
    </div>
  );
}
