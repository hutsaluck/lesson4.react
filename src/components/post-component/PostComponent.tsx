import React, {Component} from 'react'
import './post-component.css'
import {IPost} from "../../models/IPost";

type PostState = {
    post: IPost
}

class PostComponent extends Component<{ post: IPost }, PostState> {

    state: PostState = {
        post: {
            userId: 1,
            id: 1,
            title: '',
            body: '',
        }
    }

    componentDidMount() {
        this.setState({...this.state, post: this.props.post});
    }

    render() {
        return (
            <div className="post-item">
                <h3>{this.state?.post.title}</h3>
                <p>{this.state?.post.body}</p>
            </div>
        );
    }
}

export default PostComponent;










