import { server } from '../../../config'
import Meta from "../../../components/Meta"
import Image from "next/image"
import styles from '../../../styles/ModelItems.module.css'
import Link from 'next/link'

const model = ({ model }) => {

    return (
        <>
        <Meta title={model.title} description="Diego's Portfolio"/>
        <div className={styles.content}>
            <div className={styles.leftGrid}>
                <h1>Placeholder</h1>
                <Image src={model.thumbnail} alt="image" width={1920} height={1080} />
            </div>
            <div className={styles.rightGrid}>
                <h1>{model.title}</h1>
                <p>{model.description}</p>
                <br />

                <Link href='/models'><a className={styles.back}>← Go Back</a></Link>
            </div>
        </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/items/${context.params.id}`)

    const model = await res.json()

    return {
        props: {
            model,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/items`)

    const models = await res.json()

    const ids = models.map((model) => model.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default model