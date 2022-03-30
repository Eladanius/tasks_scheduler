import { TaskComponent } from './components';

const data = [
  { title: 'Task 1', content: 'Some text' },
  { title: 'Task 2', content: 'Some stuff' },
  { title: 'Task 3', content: 'sxdfcgvhbjnkml' },
  { title: 'Task 4', content: 'To do something' },
];

function App() {
  return (
    <div className='App'>
      {data.map((el, i) => (
        <TaskComponent key={i} title={el.title} content={el.content} />
      ))}
    </div>
  );
}

export default App;