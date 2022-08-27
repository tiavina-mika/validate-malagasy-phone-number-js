import "./styles.css";

const validatePhoneNumber = (str) => {
  const phoneRegex = /^0?(32|33|34|38)[- ]?(\d{2})[- ]?(\d{3})[- ]?(\d{2})$/;

  return str.match(phoneRegex);
};

const number = "321865749";
console.log(validatePhoneNumber(number));

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <h1>Validate Malagasy (from Madagascar) phone number</h1>
        <h3>The possibities are</h3>

        <ul>
          <li>341865749</li>
          <li>34 18 657 49</li>
          <li>34-18-657-49</li>
          <li>0341865749</li>
          <li>0321865749</li>
          <li>0331865749</li>
          <li>0381865749</li>
        </ul>
        <h6>See the console below to see the result</h6>
      </div>
      <footer>
        <a href="https://tiavina-michael-ralainirina.herokuapp.com/">
          Tiavina Michael Ralainirina
        </a>
      </footer>
    </div>
  );
};

export default App;
