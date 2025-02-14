import s from "./style.module.css";

export const Card = ({children}) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    )
}