import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';

function App() {

  // Defining default state for stuff
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Submit Form + Set Search Query Word
  const submitForm = e => {
    e.preventDefault();
    let val = e.currentTarget.firstChild.value;
    console.log(val);
    setSearchQuery(val);
}

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22461988-e313c8ace90cdc5b0e082edd8&q=${searchQuery}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        console.log(data);
      })
      .catch(err => console.log(err))
  }, [searchQuery]);


  return (
    <div className="App">

      <SearchBar submitForm={submitForm}/>
       
      <Gallery images={images}/>


    </div>

  );
}

export default App;
