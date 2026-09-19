import InlineStyle from "./components/InlineStyle";
import CSSModule from "./components/CSSModule";
import StyledComponent from "./components/StyledComponent";
import BootstrapExample from "./components/BootstrapExample";

function App() {
  return (
    <div className="container">
      <h1 className="main-title">
        React Styling Practice
      </h1>

      <InlineStyle />

      <CSSModule />

      <StyledComponent />

      <BootstrapExample />
    </div>
  );
}

export default App;