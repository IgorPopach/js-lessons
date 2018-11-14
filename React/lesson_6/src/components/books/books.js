import React from 'react';
import BookItem from './../bookItem/bookItem';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "What is Lorem Ipsum?",
                    author: "Popach Igor",
                    publish: "Sport",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    price: null,
                },
                // {
                //     id: 2,
                //     title: "Why do we use it?",
                //     author: "Sara Conor",
                //     publish: "Education",
                //     description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                // },
                // {
                //     id: 3,
                //     title: "Where does it come from?",
                //     author: "Elvis Presley",
                //     publish: "Music",
                //     description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                // },
            ]
        }
    }
    render() {
        console.log("render <Books />");
        return (
            <div className="container">
                {this.state.books.lenght !== 0 ?
                this.state.books.map((bookItem) => {
                    return (<BookItem key={bookItem.id} title={bookItem.title} author={bookItem.author} publish={bookItem.publish} description={bookItem.description} />)
                }) :
                    <div>Books not found... :(</div>
                }
            </div>
        )
    }
}

export default Books;
