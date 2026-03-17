export default function avatar(props) {
  return (
    <div className="text-center m-3">
      <img  className="rounded-circle" 
      
        src={props.imagemPessoa}
        style={{ width: '150px', height: '150px', borderRadius: '25px'}}/>
      
      <h5>{props.nomeDoUsuario}</h5>
    </div>
  );
}