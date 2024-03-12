import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>
        <Layout
            title={'Nosotros'}
            description = {'Sobre nosotros, guitarLA, tienda de música'}
        >
            <main className='contenedor'>
              <h2 className='heading'>Nosotros</h2>

              <div className={styles.contenido}>

                <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros'/>

                <div>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lorem tellus. Phasellus dignissim bibendum purus, at pulvinar ex vehicula nec. Nulla consectetur quam tortor, sed scelerisque dolor rutrum vitae. Donec rhoncus scelerisque ligula non gravida. Etiam euismod nibh sed diam facilisis, sit amet maximus orci ornare.
                  </p>
                  <p>
                  Mauris nisl ligula, fringilla malesuada tempus vitae, eleifend id tortor. Donec sit amet lacus urna. Aliquam nec pulvinar odio. Ut condimentum vehicula eros quis euismod. Vestibulum dapibus molestie libero, sit amet rhoncus lorem tempus non. Ut at orci 
                  </p>
                </div>

              </div>
            </main>
        </Layout>
        
      
    </>
  )
}
