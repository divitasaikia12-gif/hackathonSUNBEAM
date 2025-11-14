import React, { useEffect, useState } from 'react'
import {  getMovies} from '../../services/movies'
import './movies.css'
import { toast } from 'react-toastify'
import GridPropertiesListing from '../../components/GridPropetiesListing/GridPropertiesListing'

function PropertyListing() {
  // store all the properties
  const [movies, setMovies] = useState([])

  const getMoviesList = async () => {
    const response = await getMovies()
    console.log(response)
    if (response['status'] == 'success') {
      // set the properties and re-render the component UI
      setMovies(response['data'])
    }
  }

  useEffect(() => {
    // load the properties automatically when this component is launched
    getMoviesList()
  }, [])

  

  return (
    <div>
      <div className='container'>
        <h2 className='page-header'>All Movies</h2>      
        
          {/* <GridPropertiesListing
            movies={movies}
            
          /> */}
       
      </div>
    </div>
  )
}

export default PropertyListing
