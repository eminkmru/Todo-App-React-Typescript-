import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./apptypes";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);
  console.log(todoList);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else if (e.target.name === "workDay") {
      setWorkDay(Number(e.target.value));
    }
  };

  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };
  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="maincard">
        <h2>Lütfen Task Giriniz</h2>
        <input
          className="maininput"
          type="text"
          value={task}
          name="task"
          placeholder="Taskınızı Giriniz..."
          onChange={handleChange}
        />
        <input
          className="maininput"
          type="number"
          value={workDay}
          name="workDay"
          placeholder="Kaç günde tamamlamalısınz..."
          onChange={handleChange}
        />
        <button className="btn" onClick={addNewTask}>
          Yeni Task Ekle
        </button>
      </div>
      <div className="maintask">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
