import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {getPostComments} from "../../services/Json.placeholder";

const Posts = () => {

    let location = useLocation();

    let {state: postId} = location;

    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        getPostComments(postId).then(value => setPostComments(value.data))
    }, [postId])

    return (
        <div>
            <h2>All post comments</h2>
            {
                postComments.map(value => <p>{JSON.stringify(value)}</p>)
            }
        </div>
    );
};

export default Posts;