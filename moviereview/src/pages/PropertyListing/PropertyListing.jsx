import React, { useEffect, useState } from 'react'
import { deleteProperty, getProperties } from '../../services/properties'
import './PropertyListing.css'
import { toast } from 'react-toastify'
import TablePropertiesListing from '../../components/TablePropertiesListing/TablePropertiesListing'
import GridPropertiesListing from '../../components/GridPropetiesListing/GridPropertiesListing'

function PropertyListing() {
  // store all the properties
  const [properties, setProperties] = useState([])

  // store the current layout
  const [layout, setLayout] = useState('grid')

  const getPropertiesList = async () => {
    const response = await getProperties()
    console.log(response)
    if (response['status'] == 'success') {
      // set the properties and re-render the component UI
      setProperties(response['data'])
    }
  }

  useEffect(() => {
    // load the properties automatically when this component is launched
    getPropertiesList()
  }, [])

  const onDeleteProperty = async (id) => {
    const response = await deleteProperty(id)
    if (response['status'] == 'success') {
      toast.success('Successfully deleted property')

      // call the get api again to load new list of properties
      getPropertiesList()
    } else {
      toast.error(response['error'])
    }
  }

  return (
    <div>
      <div className='container'>
        <h2 className='page-header'>All Movies</h2>

        <div className='btn-group mb-3'>
          <button
            onClick={() => setLayout('table')}
            className={`btn btn-primary ${layout == 'table' ? 'active' : ''}`}
          >
            table
          </button>
          <button
            onClick={() => setLayout('grid')}
            className={`btn btn-primary ${layout == 'grid' ? 'active' : ''}`}
          >
            grid
          </button>
        </div>

        {layout == 'table' && (
          <TablePropertiesListing
            properties={properties}
            onDeleteProperty={onDeleteProperty}
          />
        )}

        {layout == 'grid' && (
          <GridPropertiesListing
            properties={properties}
            onDeleteProperty={onDeleteProperty}
          />
        )}
      </div>
    </div>
  )
}

export default PropertyListing
