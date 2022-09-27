import './App.css';
import { Component } from 'react';
import { Busca } from './components/Busca';
import { Lista } from './components/Lista';
import { Cabeçalho } from './components/Cabeçalho';
import { Rodape } from './components/Rodape';


class App extends Component {

  state = {
    busca: '',
    odas: []
  }
  componentDidMount(){
    this.carregaODAs();
  }
  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }
  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }
  render(){
    const{odas} = this.state;
    return (
      <section className="container">
        <div className='Cab'>
        <Cabeçalho
        props={this.state.props}
        />
        </div>
        <div className='rodape'>
        <Rodape
         pr={this.state.pr}
        />
        </div>
        <div className='busca'>
         <Busca
         busca={this.state.busca}
         buscaODA={this.buscaODA}
         />
        </div>
        <div className='lista'>
        {odas.map(oda =>(
          <Lista
          oda={oda}
          odas={odas}
          
          />
        ))}
      </div>
      </section>
    )
    
  
  }
  }
  
  export default App;
  
