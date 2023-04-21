import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Form from './components/Form';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Description from "./components/Description";
import React from 'react';
import Basket from "./components/basket/Basket";

export const AppContext = React.createContext({})

function App() {
  //хранение данных
  const [tyrs, setTyrs] = useState( [] )
  //для избранных
  const [favorites, setFavorites] = useState( [] )
  //для корзины
  const [overlayItems, setOverlayItem] = useState( [] )

  useEffect (()=>{
   async function axiosData(){
    const tyrsData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs')
    const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
    const cardData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')
    console.log(tyrsData);
    setTyrs(tyrsData.data)

    setTyrs(tyrsData.data)
    setFavorites(favorites.data)
    setOverlayItem(cardData.data)

   }
   axiosData();
},[])
  

   const deleteItem=(id)=>{
       axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
       setOverlayItem((objDelete)=> objDelete.filter(item=> item.id !==id))
   }

   const isAdded=(myId)=>{
      return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
   }

   const isFav=(myId)=>{
    return favorites.some((objIsFav)=> objIsFav.myId === myId)
 }

  return (
    <AppContext.Provider
    value={
      {
      tyrs,
      setTyrs,
      overlayItems,
      setOverlayItem,
      favorites,
      setFavorites,
      isAdded,
      isFav
      }
    }>
    <div>
      <Router>
        <Header/>
        <Routes>

          <Route path='/favorites'
          element={
             <Favorites 
             favorite={favorites}
             setFavorites={setFavorites}
             item={tyrs}
             overlayItems={overlayItems}
             setOverlayItem={setOverlayItem}
             />
          }
        />

          <Route path='/'
          element={
             <Home
             item={tyrs}
             overlayItems={overlayItems}
             setOverlayItem={setOverlayItem}
             favorite={favorites}
             setFavorites={setFavorites}
             />
          }
        />
          <Route path='/description'
                element={
                  <Description/>
                }
            />

          <Route path='/form'
                element={
                  <Form/>
                }
            />

          <Route path='/cart'
                element={
                  <Basket/>
                }
            />

          </Routes>
      </Router>
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
