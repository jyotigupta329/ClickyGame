import React from 'react';
import ClickyImage from "./components/ClickyImage/ClickyImage";
import Header from "./components/Header/Header";
import picturesJson from "./pictures.json";

let clickedImageArray = [];

class App extends React.Component {
    state = {
        score: 0,
        highestScore: 0,
        clickedImage: clickedImageArray,
        pictures: picturesJson
    };

    /**
     * React mounting function 
     */
    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            pictures: this.shuffleImage(this.state.pictures)
        });
    }

    shuffleImage = pics => {
        console.log('Hello');
        for (let i = 0; i < picturesJson.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = pics[i];
            pics[i] = pics[j];
            pics[j] = temp;
        }
        return pics;
    };

    /**
     * guess is picture image id
     */
    playersGuess = (guessId) => {
        const score = this.state.score;
        const highestScore = this.state.highestScore;
        let newScore = score + 1;
        let newHighestScore = 0;

        if (newScore > highestScore) {
            newHighestScore = score + 1;
        } else {
            newHighestScore = highestScore;
        }

        if (clickedImageArray.includes(guessId)) {
            alert("You lose");
            clickedImageArray = [];
            newHighestScore--;
            this.setState({
                score: 0,
                highestScore: newHighestScore,
                pictures: this.shuffleImage(this.state.pictures)
            })
        } else {
            clickedImageArray.push(guessId);
            if (clickedImageArray.length === picturesJson.length) {
                alert("You Win");
                newScore = 0;
            }
            this.setState({
                score: newScore,
                highestScore: newHighestScore,
                image: this.shuffleImage(this.state.pictures)
            });
        }

    }
    /**
     *  handleClick handles the clicks on image
     */
    handleClick = (id) => {
        this.playersGuess(id);

    };


    render() {

        return (
            <div>
                <Header score={this.state.score} highestScore={this.state.highestScore} />

                <div className="container">
                    <div className="row">
                        {
                            this.state.pictures.map(res => (
                                <ClickyImage
                                    image={res.image}
                                    id={res.id}
                                    key={res.id}
                                    handleClick={this.handleClick}
                                />
                            ))
                        }

                    </div>
                </div>

            </div>
        );
    }
};


export default App;

