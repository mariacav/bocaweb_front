export const Lista = ({oda, odas}) => {
    return (
      <div className='lista'>
       <p> {odas.length} odas </p>  
        <div className="l" key={oda._id}>
            <h1>nome: {oda.nome}</h1>
            <p>usuario: {oda.usuario}</p>
            <p>descricao: {oda.descricao}</p>
            <p>data de inclusao: {oda.data_inclusao}</p>
            <p>palavras chave: {oda.palavras_chave}</p>

          </div>
      </div>
    )
      
}