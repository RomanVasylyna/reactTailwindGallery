import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';

function App() {

  // Defining default state for stuff
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('batman');

  // Submit Form + Set Search Query Word
  const submitForm = e => {
    e.preventDefault();
    let val = e.currentTarget.firstChild.value;
    val != '' ? setSearchQuery(val) : alert('Please enter search word');
  }

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22461988-e313c8ace90cdc5b0e082edd8&q=${searchQuery}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
      })
      .catch(err => console.log(err))
  }, [searchQuery]);


  return (
    <div className="App">

      <div className="container mx-auto">

        <SearchBar submitForm={submitForm} />

        <Gallery images={images} />

      </div>


    </div>

  );
}

export default App;
