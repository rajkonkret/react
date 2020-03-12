import React from 'react';
import axios from 'axios';
import './PostCreate.scss'
export class PostCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: 'test',
                body: 'asasp',
                text: '',
            }
        }
    }


    // handleTitleChange = (evt) => {
    //     console.log(event.target.value)
    //     this.setState({
    //         post: {
    //             ...this.state.post,
    //             title: event.target.value,
    //         }
    //     })
    // }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            post: {
                ...this.state.post,
                [name]: value,
            }
        })
    }

    // handleBodyChange = (evt) => {
    //     console.log(event.target.value)
    //     this.setState({
    //         post: {
    //             ...this.state.post,
    //             body: event.target.value,
    //         }
    //     })
    // }

handlerFormSubmit = (event) => {
    event.preventDefault();
    axios.post(`https://jsonplaceholder.typicode.com/posts`, this.state.post);
    //alert(this.state.post.body);
    const { name, value } = event.target;
        this.setState({
            post: {
                ...this.state.post,
                text: event.target.body.value,
            }
        })

}

    render() {

        const { title, body, text } = this.state.post;
        return (
            
            <div>
            <form onSubmit={this.handlerFormSubmit} method="post">
                <div>
                    <label>Tytuł</label><br />
                    <input name="title" value={title} onChange={this.handleInputChange} />
                </div>

                <div>
                    <label>Treść</label><br />
                    <textarea name="body" value={body} onChange={this.handleInputChange} />
                </div>
                <button type="submit">Wyślij</button>
            </form>
           
        
        <div className="TextArea">Text{text}</div>
        </div>
        );

    }
}