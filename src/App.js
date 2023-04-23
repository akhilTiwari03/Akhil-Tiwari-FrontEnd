import List from './Components/List';
import './App.css';

const App = () => {
  const items = [
    { text: 'Akhil Tiwari' },
    { text: '12013811' },
    { text: 'Lovely Professional University' },
  ];

  console.log("Items:", items);

  return (
    <div>
      <List align="center" items={items} />
    </div>
  );
};
export default App;

