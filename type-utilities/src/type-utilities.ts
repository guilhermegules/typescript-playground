type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

// Type Readonly

const todo: Readonly<Todo> = {
  title: "Watch Breaking Bad series again",
  description: "Remember of details",
  completed: false
}

console.log(todo);

// todo.completed = true // Error

// Partial use
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo, ...fieldsToUpdate
  }
}

const newTodo: Todo = updateTodo(todo, { completed: true });

console.log(newTodo);

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

const todoPreview: TodoPreview = {
  title: 'Complete The Last of Us Part 2',
  completed: false,
}

// Omit
type TodoOmit = Omit<Todo, "completed">;

const todoOmit: TodoOmit = {
  title: "Complete Mass Effect 2 again",
  description: "Remember moments"
}