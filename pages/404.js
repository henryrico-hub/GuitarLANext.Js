import Link from 'next/link'
import Layout from '../components/layout'
import React from 'react'

export default function Pagina404() {
  return (
    <Layout
        title='Página no encontrada'
    >
        <p className='error'>Página no encontrada</p>
        <Link className='error-enlace' href='/'>
            Ir al Inicio
        </Link>
        
    </Layout>
  )
}
