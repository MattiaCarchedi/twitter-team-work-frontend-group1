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
                    <div>
                        { ListofMessages.map((message) => {
                            return (
                                <MessageListItem
                                    key={message._id}
                                    _id={message._id}   
                                    text={message.text}
                                    id_user={message.id_user}
                                    name_user={message.name_user}
                                    onNameClickHandler={message.onNameClickHandler}
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
            fetch('#')
                .then(response => {
                    return response.json();
                })
                .then(ListofMessages => {
                    this.setState({
                        ListofMessages: ListofMessages.all,
                        status: 'SUCCEED'
                    });
                })
                .catch((error) => {
                    this.setState({
                        status: 'FAILED',
                        errorMessage: error.message,
                    })
                });
        })
    }
}

export default MessageList;