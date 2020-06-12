  
import React from 'react';
import { useParams } from 'react-router-dom';

import SingleMessageFetcher from './SingleMessageFetcher';

const SingleMessageItem = () => {
    let { itemId } = useParams();

    return <SingleMessageFetcher itemId={itemId} />
};

export default SingleMessageItem;