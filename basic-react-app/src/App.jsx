import './App.css'
import Title from "./Components/Title.jsx";
// import Card from './Components/Card';
// import Product from './Components/Product.jsx';
// import sum from './Components/Title/sum';
import ProductTab from './Components/ProductTab.jsx';
import MsgBox from './Components/MsgBox.jsx';

function App() {
  return (
    <>
    <MsgBox userName="Dhruv" textColor="yellow"/>
    <MsgBox userName="Full-Stack Developer" textColor="pink"/>
    <ProductTab />
    </>
  );
}

export default App;
