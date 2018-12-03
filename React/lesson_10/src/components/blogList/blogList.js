import React from 'react';
import BlogItem from './../blogItem/blogItem';


class BlogList extends React.Component{
    state = {
        posts: [
            {
                id:1,
                author: 'Igor Popach',
                date: '03.12.2018',
                title: 'Music bla bla',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
            },
            {
                id:2,
                author: 'Sara Conor',
                date: '03.12.2018',
                title: 'Why do we use it?',
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                id:3,
                author: 'Elvis Presley',
                date: '03.12.2018',
                title: 'Where does it come from?',
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
            },
        ]
    }
    postHandler = (path,properties) => {
        console.log('path',path)
        this.props.history.push({
            pathname:`${path}`,
            properties: properties,
        });
    }
    homeHandler = () => {
        this.props.history.push({
            pathname:'/',
        })
    }
    render(){
        console.log('BlogList', this.props)
        return(
            <div className='row justify-content-center'>
                {this.state.posts.map((e) => (
                    <BlogItem key={e.id} id={e.id} author={e.author} title={e.title} date={e.date} desc={e.desc} postHandler={this.postHandler} pathName={this.props.match.path} />
                    ))
                }
                <button onClick={this.homeHandler}>Home</button>
            </div>
        )
    }
}

export default BlogList;