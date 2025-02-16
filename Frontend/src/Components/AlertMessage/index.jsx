import React, { useEffect, useState } from "react";
import s from "./style.module.css";

export const AlertMessage = ({ type, message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onClose) onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) return null;

    return (
        <div className={`${s.alert} ${s[type]}`}>
            <i className={`fa ${type === "success" ? "fa-check-circle" : "fa-times-circle"}`} />
            <span>{message}</span>
        </div>
    );
};
