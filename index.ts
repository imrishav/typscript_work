import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: true;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const fin = todo.completed;

  logTodo(id, title, fin);
});

const logTodo = (id: number, title: string, fin: boolean) => {
  console.log(`
  ${id},
  ${title},
  ${fin}
`);
};
