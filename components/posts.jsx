import React,{Component} from "react";
class Posts extends Component {
    state = {
        posts:[
            {id:1,title:'post1',desc:'this is description and content of post 1'},
            {id:2,title:'post2',desc:'this is description and content of post 2'},
            {id:3,title:'post3',desc:'this is description and content of post 3'}
        ]
      } 
      renderposts(){
        if (this.state.posts.length === 0) return<p>there's no posts yet</p>
        else return  <section className="posts">
        {this.state.posts.map(post=>
            <div key={post.id}>
                <h4>{post.title}</h4>
                <h4>{post.desc}</h4>
            </div>)}
    </section>
      }
    render() { 
        return (
            <>
            <h4>these is posts</h4>
            {this.renderposts()}
            {this.state.posts.length === 0 && 'please create a new post'}
            {this.state.posts.length>2 ? 'the posts bigger than 2':'the posts less than 2'}
           
            </>
        );
    }
}
 
export default Posts;