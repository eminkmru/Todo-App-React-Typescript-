import React from "react";
import { PropsType } from "./apptypes";

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div className="cards">
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button className="btnNew" onClick={() => deleteTask(task.taskName)}>
          Sil
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
