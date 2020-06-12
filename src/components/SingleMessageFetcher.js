import React from "react";
import SingleMessageDisplayInfo from './SingleMessageDisplayInfo';

export default class SingleMessageFetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'IDLE', // STARTED, SUCCEED, FAILED,
            errorMessage: null,
            message: null,
        };
    }

    render() {
        const { status, message } = this.state;

        return (
            <div>
                {status === 'IDLE' && (
                    <div>
                         Will start fetching in a moment
                    </div>
                )}

                {status === 'STARTED' && (
                    <div>
                        Loading...
                    </div>
                )}

                {status === 'SUCCEED' && (
                    <div>
                        <SingleMessageDisplayInfo
                       
                            key={message.key}
                            _id={message._id}
                            text={message.text}
                            id_user={message.id_user}
                            name_user={message.name_user}
                        />
                    </div>
                )}

                {status === 'FAILED' && (
                    <div style={{ backgroundColor: 'red' }}>
                        Fetching failed
                    </div>
                )}
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            status: 'STARTED',
            errorMessage: null
        }, () => {
            fetch(`https://shitter-twit.herokuapp.com/message/${this.props.itemId}`)
                .then(response => {
                    return response.json();
                })
                .then(messageItem => {
                    this.setState({
                        message: messageItem,
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