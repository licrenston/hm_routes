import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/Json.placeholder";
import {Link} from "react-router-dom";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value.data))
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            {
                comments.map(value => <Link to={'/posts/' + value.postId + '/comments'} state={value.postId}>
                    <p>{JSON.stringify(value)}</p></Link>)
            }
        </div>
    );
};

export default Comments;