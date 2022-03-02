import React, { Fragment } from 'react'
import Form from '../Form/Form'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'

import Header from '../Header/Header'
import styles from './Page.module.css'

import useForecast from '../../hooks/useForecast'
import Forecast from '../Forecast/Forecast'

const Page = () => {
  const { isError, isLoading, forecast } = useForecast()

  return (
    <Fragment>
      <Header />
      <div className={styles.box}>
        <Form />
        {isError && <Error message={isError} />}
        {isLoading && <Loader />}
        {forecast && <Forecast /> }
      </div>
      
    </Fragment>
  )
}

export default Page