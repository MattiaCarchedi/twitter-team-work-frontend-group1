import React from 'react';

import MessageListItem from './MessageListItem';

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'IDLE', // STARTED, SUCCEED, FAILED
            errorMessage: null,
            ListofMessages: [],
        };
    }

    render() {
        const { status, ListofMessages } = this.state;

        return (
            <div>
                {status === 'IDLE' && (
                    <div>
                        Component has been mount
                        and will start fetching in a moment
                    </div>
                )}

                {status === 'STARTED' && (
                    <div>
                        Loading...
                    </div>
                )}

                {status === 'SUCCEED' && (
                    <div className="message-list-item">
                        { ListofMessages.map((message) => {
                            return (
                                <MessageListItem
                                    key={message._id}
                                    id={message._id}   
                                    text={message.text}
                                    id_user={message.id_user}
                                    name_user={message.name_user}
                                    onNameClickHandler={(user_id) => {console.log(user_id)}}
                                    date={message.date}
                                />
                            )
                        }) }
                    </div>
                )}

                {status === 'FAILED' && (
                    <div style={{ backgroundColor: 'red' }}>
                        Unable to fetch info
                    </div>
                )}
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            status: 'STARTED',
            errorMessage: null
        }, () => {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            fetch('https://shitter-twit.herokuapp.com/message')
                .then(response => {
                    return response.json();
                })
                .then(ListofMessages => {
                    this.setState({
                        ListofMessages: ListofMessages,
                        status: 'SUCCEED'
                    });
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({
                        status: 'FAILED',
                        errorMessage: error.message,
                    })
                });
        })
    }
}

export default MessageList;