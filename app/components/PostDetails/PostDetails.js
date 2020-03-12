import React from 'react';
import axios from 'axios';
import './PostDetails.scss';

export class PostDetails extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           post: null,
       }
   }
   
   componentDidMount() {
       const id = this.props.match.params.id;
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(response => this.setState({
          post: response.data
       }));
   }
   
    render() {
        if(!this.state.post){
            return null;
        }
        const {title, body} = this.state.post;
        return (
            <article >
                <div class="PostDetails">
                <h1>{title}</h1>
                <div>{body}</div>
                </div>
            </article>
        );
    }
}