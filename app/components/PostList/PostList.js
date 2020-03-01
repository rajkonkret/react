import React from 'react';
import axios from 'axios';
import { PostListItem } from '../PostListItem/PostListItem';

export class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({
            posts: response.data,
        }));
    }
    
    render() {
        return (
            <>
            {this.state.posts.map(post => <PostListItem key={post.id} post={post} />)}
            </>
        );
    }
}