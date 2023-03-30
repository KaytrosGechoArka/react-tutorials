import { MouseEvent, useState } from "react";

interface Props {
  items: string;
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  if (items.length == 0) return <p>No items founded</p>;
  //items.length===0?<p>No items founded</p>:null
  //We can also usefunctions
  //But the better way is items.length===0 && <p>No items Founded</p>
  //let selectedIndex = 0;
  /*const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
