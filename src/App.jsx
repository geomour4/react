import Avatar from './Avatar.jsx';

export default function App() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-around">
        
        <Avatar  imagemPessoa="https://people.com/thmb/GjweYvXfPX88ni5CBFPOAjwK8Fw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(506x0:508x2)/justin-bieber-1-1-c4d3fff3a05842288b37153d2155ddb5.jpg" 
        nomeDoUsuario="Justin Bieber"/>

        <Avatar imagemPessoa="https://www.estadao.com.br/resizer/v2/ZPOK4ZLBOJHNVOI6RAPL25HE2Y.jpg?quality=80&auth=fb0c6c03488f63c75df09c6505f6b3430920c78f5d7aa1540f79ce1373ca354b&width=380"
        nomeDoUsuario="Bad Bunny"/>

        <Avatar imagemPessoa="https://www.instagram.com/p/DT8gOivjOgh/"
        nomeDoUsuario="Kendrick Lamar"/>

      </div>
    </div>
  );
}