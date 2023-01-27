import TheBaseButton from './components/Elements/Buttons/TheBaseButton'
import './App.css';

function App() {
  return (
    <div className="App">
      <TheBaseButton type={'submit'} buttonText={'save'} onClick={() => alert('wertey')}></TheBaseButton>
    </div>
  );
}

export default App;
