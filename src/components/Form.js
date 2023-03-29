import { useState } from "react";

export default function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [goalNo, setGoalNo] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        // console.log(title, type, goalNo);
        onAdd({ title, type, goalNo });
        setTitle("");
        setType("");
        setGoalNo("");
      }}
      className="border p"
    >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={e => {
            setTitle(e.currentTarget.value);
          }}
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Task Type
        </label>
        <select
          id="type"
          className="form-select"
          value={type}
          onChange={e => {
            setType(e.currentTarget.value);
          }}
        >
          <option disabled></option>
          <option>to-do</option>
          <option>doing</option>
          <option>done</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="goalNo" className="form-label">
          Goal No
        </label>
        <select
          id="goalNo"
          className="form-select"
          value={goalNo}
          onChange={e => {
            setGoalNo(e.currentTarget.value);
          }}
        >
          <option disabled></option>
          <option>Goal 1</option>
          <option>Goal 2</option>
          <option>Goal 3</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}
