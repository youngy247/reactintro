import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CoinToss from "./components/CoinToss/CoinToss";
import List from "./components/List";
import Button from "./components/Button";

const App = () => {
  return (
      <>
        <Button text="Contact me" newClass="foo"/>
          <Button text="Details" newClass="bar"/>
          <Button text="Save" newClass="baz"/>
      </>
  )
}

export default App
