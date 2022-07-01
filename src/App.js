import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
function App() {
  return (
    <>
    <h1 className='header'>Movie Site</h1>
    <div className="container App">
      
      <Cards title="Spier-Man" description="Click Below button to Visit this movie page" IMAGE="https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg "/>

      <Cards  title="Dune" description="Click Below button to Visit this movie page" IMAGE="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRo7krq-oX1zw_6_54L_MPOkkXrNX22gnRVQ&usqp=CAU"/>

      <Cards title="Bajirao Mastani" description="Click Below button to Visit this movie page" IMAGE="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAxOB5Mqxp1CKlpy39GI2P418Qm3TFniRQg&usqp=CAU"/>
      

      <Cards title="Beauty Beast" description="Click Below button to Visit this movie page" IMAGE="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Dw_vZ-miu7J7Tc3bpjvdxATYIKzRo8KX0w&usqp=CAU"/>

      <Cards title="Star Wars" description="Click Below button to Visit this movie page" IMAGE="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKroMp2nj7OYbTCuIlBQwNtefyRyRDvMfRg&usqp=CAU"/>
    </div>
    </>
  );
}

export default App;
