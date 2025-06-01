import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }, []);

  const sendData = () => {
    window.Telegram.WebApp.sendData("Данные из React Web App");
  };

  const closeApp = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <div className="App">
      <h1>Telegram Web App</h1>
      <button onClick={sendData}>📤 Отправить данные в бота</button>
      <button onClick={closeApp}>❌ Закрыть</button>
    </div>
  );
}

export default App;
