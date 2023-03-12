export type todoType = {
  taskName: string;
  workDay: number;
};
export type PropsType = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};
