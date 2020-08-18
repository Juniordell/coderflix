import React, { useEffect } from 'react';
import Menu from '../../components/Menu'
// import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import categoriasRepositories from '../../repositories/categorias'
import { useState } from 'react';

function Home() {

  const [initialData, setInitialData] = useState({
    categorias: []
  })

  useEffect(() => {

    categoriasRepositories.getAllWithVideos()
      .then(categoriasComVideo => setInitialData(categoriasComVideo))
      .catch(err => console.log(err.message))

  }, [])

  return (
    <div style={{background: '#141414'}}>
      <Menu />

      { JSON.stringify(initialData) }
{/* 
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'Oque é Front-end? Trabalhando na área'}
      />

      <Carousel
        ignoreFirstVideo 
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        category={dadosIniciais.categorias[5]}
      /> */}
    
      <Footer />
    </div>
  );
}

export default Home;
