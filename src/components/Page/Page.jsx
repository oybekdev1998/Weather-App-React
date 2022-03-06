import React, { Fragment } from 'react'
import Form from '../Form/Form'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'

import Header from '../Header/Header'
import styles from './Page.module.css'

import useForecast from '../../hooks/useForecast'
import Forecast from '../Forecast/Forecast'

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast()
  
  const onSubmit = (value) => {
    submitRequest(value)
  }

  return (
    <Fragment>
      <Header />
      {!forecast && (
        <div className={`${styles.box} position-relative`}>
          
          { !isLoading && <Form submitSearch={onSubmit} /> }
          { isError && <Error message={isError} /> }
          { isLoading && <Loader /> }
          { forecast && <Forecast /> }
        </div>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </Fragment>
  )
}

export default Page