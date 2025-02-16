import s from "./style.module.css";

export const MessageReturn = ({ message, response}) => {

    const iconResponse = response ? "fa fa-check-circle" : "fa fa-times-circle";

    return (
        <div className={s.messageContent}><i class={iconResponse} style={{ color: response ? "green" : "red" }}></i>
            {message}
        </div>
    )
}