import React from 'react';
import Post from './../post/post';
import Aside from './../aside/aside';


class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    title: "Sport",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque" +
                    "volutpat sem ut ultricies ullamcorper. Sed luctus risus at justo varius, at accumsan" + 
                    "mi tempor. Pellentesque aliquam massa sem, sit amet porttitor metus suscipit et. Donec" + 
                    "quis nibh justo. Curabitur venenatis faucibus sapien non tristique. Mauris ullamcorper" + 
                    "hendrerit nulla, sit amet blandit eros aliquam a. Morbi ut gravida nulla, ut imperdiet" + 
                    "mauris. Nam condimentum dui in nunc semper, id pulvinar erat cursus. Duis condimentum" + 
                    "bibendum turpis, eget ornare nibh finibus quis. Nunc a felis vestibulum, eleifend" + 
                    "mauris ac, faucibus justo.",
                    imgSource: "https://picsum.photos/300/200?random"
                    },
                {
                    id: 2,
                    title: "Education",
                    description: "Sed ut nibh commodo, pellentesque nulla sed, scelerisque leo. Morbi nec" +
                    "quam sed justo elementum luctus nec vitae ligula. Vestibulum eu massa ex. Suspendisse" + 
                    "lobortis felis sed sem commodo, consequat lacinia metus pulvinar. Vestibulum in justo" + 
                    "nunc. Ut tristique mauris nec elit tincidunt, at blandit metus hendrerit.",
                    imgSource: "https://picsum.photos/300/200?random",
                    },
                {
                    id: 3,
                    title: "Science",
                    description: "est rerum tempore vitae nsequi sint nihil reprehenderit dolor beatae ea" +
                    "dolores neque nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis nqui" +
                    "aperiam non debitis possimus qui neque nisi nulla",
                    imgSource: "https://picsum.photos/300/200?random"
                    },
                {
                    id: 4,
                    title: "Music",
                    description: "quia et suscipit nsuscipit recusandae consequuntur expedita et cum" + 
                    "nreprehenderit molestiae ut ut quas totam nnostrum rerum est autem sunt rem eveniet" + 
                    "architecto",
                    imgSource: "https://picsum.photos/300/200?random"
                    },
                {
                    id: 5,
                    title: "Films",
                    description: "ullam et saepe reiciendis voluptatem adipisci nsit amet autem assumenda" + 
                    "provident rerum culpa nquis hic commodi nesciunt rem tenetur doloremque ipsam iure nquis" + 
                    "sunt voluptatem rerum illo velit",
                    imgSource: "https://picsum.photos/300/200?random"
                    }
            ],
            selectedPost: null
        }
    }
    

    handleSelectedPost= (post) => () => {
        this.setState({selectedPost: post})
    }

    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                        <div className="col-8">
                            {this.state.posts.map(post => (
                                <Post key={post.id} title={post.title} description={post.description} imgSource={post.imgSource} onClick={this.handleSelectedPost(post)} style={{cursor:'pointer'}} />
                            ))}
                        </div>
                        <div className="col-4">
                            {this.state.selectedPost && (
                                <Aside title={this.state.selectedPost.title} description={this.state.selectedPost.description} imgSource={this.state.selectedPost.imgSource}/>
                            )}
                        </div>
                </div>
            </div>
        )
    }
}

export default Posts;