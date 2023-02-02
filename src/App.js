import './App.css';
import { ContainerForm} from './components/ContainerForm/ContainerForm';
import { ContainerFormStyled } from './components/ContainerForm/ContainerFormStyle';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContainerFormStyled>
          <ContainerForm/>
        </ContainerFormStyled>
      
      </header>
    </div>
  );
}

export default App;
