import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import ImageContainer from "./components/ImageContainer";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

class App extends Component {
    state = {
        images: images,
        score: 0,
        highScore: 0,
        history: []
    };

    // Fisher-Yates shuffle
    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        
            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        };

        // console.log(array)
        this.setState({images: array});
    };

    componentDidMount() {
        this.shuffle(this.state.images);
        // console.log(this.state.images)
    };

    handleIncrement = (id) => {
        if (this.state.history.indexOf(id) === -1) {
            this.setState({score: this.state.score + 1});

            if ((this.state.score + 1) > this.state.highScore) {
                this.setState({highScore: this.state.score + 1});
            };

            this.setState({history: this.state.history.concat([id])});
            // console.log(this.state.history.concat([id]));

            if ((this.state.score + 1) === 12) {
                this.setState({history: []});
                
                alert("Congratulations! You Won!");

                this.setState({score: 0});
            };
            
            this.shuffle(this.state.images);
        } else {
            this.setState({history: []});
            
            alert("You lose. Please try again.");

            this.setState({score: 0});

            this.shuffle(this.state.images);
        };
    };

    render() {
        return (
            <Wrapper>
                <Title>🎰 Clicky Game</Title>
                <Score>Score: {this.state.score} | High Score: {this.state.highScore}</Score>
                <ImageContainer>
                    {this.state.images.map(image => (
                        <ImageCard
                            id={image.id}
                            key={image.id}
                            name={image.name}
                            image={image.image}
                            handleIncrement={this.handleIncrement}
                        />
                        
                    ))}
                </ImageContainer>
            </Wrapper>
        );
    };
};

export default App;

