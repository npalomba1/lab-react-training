import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"; 
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating"

function App() {
  return (
    <div className="card">
      <h2>Nick's Project</h2>
      <IdCard 
        firstName="Gian Carlo"
        lastName="Sosa"
        gender='Male'
        height={175}
        birth="12/15/1989"
      ></IdCard>
      <Greetings
        lang="fr"
        name="Erika"
      />
      <Random
      min={3}
      max={25}/>
      <Random
      min={5}
      max={36}/>
      <BoxColor
      r={255}
      g={0}
      b={0}
      />
      <BoxColor
      r={150}
      g={100}
      b={0}
      />
      <BoxColor
      r={5}
      g={78}
      b={27}
      />
      <CreditCard
      type="Visa"
      number="............2345"
      expirationMonth={4}
      expirationYear={27}
      bank="BOC"
      owner="Camilo Ocampo"
      bgColor="#117ACA"
      color="white"
      />
      <Rating 
      children={3}
      />

    


    </div>
  );
}

export default App;
