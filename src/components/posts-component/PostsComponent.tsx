import React, {Component} from 'react'
import {IPost} from "../../models/IPost";
import './posts-component.css'
import PostComponent from "../post-component/PostComponent";

type PostState = {
    posts: IPost[]
}

class PostsComponent extends Component<{ posts: IPost[] }, PostState> {

    state: PostState = {
        posts: []
    }

    componentDidMount() {
        this.setState({...this.state, posts: [...this.props.posts]});
    }

    render() {
        return (
            <div className="wrap-posts">
                {
                    this.props?.posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export default PostsComponent;









