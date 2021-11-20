import { server } from '../config'
import ModelList from '../components/ModelList'
import Meta from '../components/Meta'
import styles from '../components/Models.module.css'

export default function Models({ modelData }) {
  return (
    <>
    <Meta title='3D Models' description="Diego's Portfolio"/>

    <div className={styles.content}>
        <ModelList modelData = {modelData} />
    </div>

    </>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/items`)
    const modelData = await res.json()

    return {
        props: {
            modelData,
        },
    }
}