import { Alert } from "react-bootstrap";
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["New Work", "San Francisco", "Tokoyo", "Londen", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
