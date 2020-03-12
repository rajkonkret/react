import React from 'react';
import {Link} from 'react-router-dom';
import './PostListItem.scss';
export class PostListItem extends React.Component {
    render() {

        const { id,title, body } = this.props.post;

        return (
            <article className="PostListItem">
<Link to={`/posts/${id}`}>
                <h3>{title}</h3>
                <div>{body}</div>
                </Link>
            </article>
        )

    }
}