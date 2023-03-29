import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);

  const onAdd = object => {
    setData([...data, object]);
  };

  const getTask = (goalNo, type) => {
    return data.filter(item => item.type === type && item.goalNo === goalNo);
  };

  return (
    <div className="app border">
      <Form onAdd={onAdd} />
      <div className="tasks-container border">
        <div className="blank"></div>
        <div className="type1">
          <h4>to-do</h4>
        </div>
        <div className="type2">
          <h4>doing</h4>
        </div>
        <div className="type3">
          <h4>done</h4>
        </div>
        <div className="goal goal1">
          <h4>Goal 1</h4>
        </div>
        <div className="goal goal2">
          <h4>Goal 2</h4>
        </div>
        <div className="goal goal3">
          <h4>Goal 3</h4>
        </div>
        <div className="border item tasks11">
          {getTask("Goal 1", "to-do").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks12">
          {getTask("Goal 1", "doing").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks13">
          {getTask("Goal 1", "done").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks21">
          {getTask("Goal 2", "to-do").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks22">
          {getTask("Goal 2", "doing").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks23">
          {getTask("Goal 2", "done").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks31">
          {getTask("Goal 3", "to-do").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks32">
          {getTask("Goal 3", "doing").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
        <div className="border item tasks33">
          {getTask("Goal 3", "done").map((item, index) => (
            <Card key={item.index} taskName={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
