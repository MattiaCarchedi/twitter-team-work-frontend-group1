  
import React from 'react';
import { useParams } from 'react-router-dom';

import SingleMessageFetcher from './SingleMessageFetcher';

const SingleCatFact = () => {
    let { messageItemId } = useParams();

    return <SingleMessageFetcher factId={messageItemId} />
};

export default SingleCatFact;