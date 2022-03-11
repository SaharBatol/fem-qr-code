import "./styles/App.scss";
import qr from "./images/image-qr-code.png";

function App() {
  return (
    <div className="outer-container">
      <div className="qr-container">
        <img src={qr} alt="QR-code" />
        <h1>Improve your front-end skills by building projects</h1>
        <h2>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </div>
  );
}

export default App;
