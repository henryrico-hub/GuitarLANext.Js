import Image from "next/image"
import Layout from "../../components/layout"
import { formatearFecha } from "../../utlis/helpers"
import styles from '../../styles/blog.module.css'

export default function Post({post}) {

    const { titulo, contenido, imagen, publishedAt} = post[0].attributes

    return (
        <Layout
            title={titulo}
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={imagen.data.attributes.formats.medium.url} width={1000} height={600} alt={`Imagen blog ${titulo}`}/>

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
    )
}

//http://localhost:1337/api/guitarras?filters[url]=beck&populate=imagen
export async function getServerSideProps({query: {url}}) {
    
    const respuesta= await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data : post} = await respuesta.json()

    console.log(post);
    return {
        props: {
            post
        }
    }
}