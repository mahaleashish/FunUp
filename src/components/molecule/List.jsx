import styles from './List.module.css'

export const ToDoList = ({ el, deleteEle, index }) => {

    return (
        <>
            <li className={styles.list}>
                {el}
                <span className={styles.icon}><i class="fa-sharp fa-solid fa-trash" onClick={() => {
                    deleteEle(index)
                }}></i></span>
            </li>

        </>
    )

}