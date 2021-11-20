import styles from './Models.module.css'
import ModelItem from "./ModelItem"

const ModelList = ({ modelData }) => {
    return (
        <div className={styles.albumWrap}>
            <div className={styles.album}>
                {modelData.map((model) => ( 
                <>
                <ModelItem model={model} />
                </>
                ))} 
            </div>
        </div>
        
    )
}

export default ModelList