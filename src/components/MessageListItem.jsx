import React from 'react'
import './MessageListItem.css';
import { Link, useRouteMatch } from 'react-router-dom';

export default function MessageListItem(props) {
    const { text, date, id_user, name_user, onNameClickHandler } = props;
    const actDate = new Date(date);
    const match = useRouteMatch();
    return (

        <div className="message-list-item">
            <div className="message-list-item__container">
                <div className="message-list-item__header">
                    <div className="message-list-item__user-name"><Link to={`${match.url}/${id_user}`}>{name_user}</Link></div>
                    
                    <div className="message-list-item__date">{`${actDate.getDate()}. ${actDate.getMonth()}. ${actDate.getFullYear()}`}</div>
                </div>
                <div className="message-list-item__text">{text}</div>

            </div>
        </div>
    )
}
