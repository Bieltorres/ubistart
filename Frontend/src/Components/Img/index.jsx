import s from "./style.module.css";

export const Img = ({url, alt}) => <img className={s.image} src={url} alt={alt} />