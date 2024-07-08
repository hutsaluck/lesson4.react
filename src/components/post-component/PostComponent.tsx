import React, {Component} from 'react'
import './post-component.css'
import {IPost} from "../../models/IPost";

type PostState = {
    post: IPost|null
}

class PostComponent extends Component<{ post: IPost }, PostState> {

    state: PostState = {
        post: null
    }

    componentDidMount() {
        this.setState({...this.state, post: this.props.post});
    }

    render() {
        return (
            <div className="post-item">
                <h3>{this.state?.post?.title}</h3>
                <p>{this.state?.post?.body}</p>
            </div>
        );
    }
}

export default PostComponent;










