import React from 'react'
import './MessageListItem.css';

export default function MessageListItem(props) {
    const { text, date, id_user, name_user, onNameClickHandler } = props;
    const actDate = new Date(date);
    return (

        <div className="message-list-item">
            <div className="message-list-item__container">
                <div className="message-list-item__header">
                    <div className="message-list-item__user-name" onClick={() => onNameClickHandler(id_user)}>{name_user}</div>
                    <div className="message-list-item__date">{`${actDate.getDate()}. ${actDate.getMonth()}. ${actDate.getFullYear()}`}</div>
                </div>
                <div className="message-list-item__text">{text}</div>

            </div>
        </div>
    )
}
