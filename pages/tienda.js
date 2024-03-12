import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {

  return (
    <Layout
        title={'Tienda Virtual'}
        description = {'Tienda Virtual , Venta de instrumentos GuitarLA'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <div className={styles.grid}>
          {guitarras.map( guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            
            /> 
          ))}

        </div>

      </main>  
    </Layout>
  )
}
// getStaticProps ejecuta en el Servidor
// para consulta periodica
/* export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }

  }
} */
 
//para 
export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}
  