        document.title = 'coding';
        let score = JSON.parse(localStorage.getItem('score')); 

        if (score === null) {
        score = {
            noOfWins: 0,
            noOfLooses: 0,
            noOfTies: 0
        };
        
        }
        function finalResult(playerChoice) {
        const ComputerMove = computerChoise();
        let result = '';
        if (playerChoice === 'Scissors') {
            if (ComputerMove === 'Rock') {
            result = 'You lose.';
            } else if (ComputerMove === 'Paper') {
            result = 'You Win.';
            } else if (ComputerMove === 'Scissors') {
            result = 'Tie.';
            }
        }
        if (playerChoice === 'Paper') {
            if (ComputerMove === 'Rock') {
            result = 'You Win.';
            } else if (ComputerMove === 'Paper') {
            result = 'Tie.';
            } else if (ComputerMove === 'Scissors') {
            result = 'You lose.';
            }
        }
        if (playerChoice === 'Rock') {
            if (ComputerMove === 'Rock') {
            result = 'Tie.';
            } else if (ComputerMove === 'Paper') {
            result = 'You lose.';
            } else if (ComputerMove === 'Scissors') {
            result = 'You Win.';

            }

        }
        if (result === 'You Win.') {
            score.noOfWins += 1;
        } else if (result === 'You lose.') {
            score.noOfLooses += 1;
        } else if (result === 'Tie.') {
            score.noOfTies += 1;
        }
            let noofgames;
            let FinalResult;
            noofgames = score.noOfWins + score.noOfLooses + score.noOfTies;
            if(noofgames === 5){
                if(score.noOfWins > score.noOfLooses){
                FinalResult = 'You Win.';
                }
                if(score.noOfLooses > score.noOfWins){
                FinalResult = 'You Lose.';
                }
                if(score.noOfWins === score.noOfLooses){
                FinalResult = 'Tie.';
                }
                
                
            }else if(noofgames >= 5){
                alert(`You have only 5 chances to play the game. Please click "Reset" to play again.`);
                noofgames = noofgames;
                noOfWins = noOfWins;
                noOfLooses = noOfLooses;
                noOfTies = noOfTies;
                
                if(onclick === 'Reset'){
                reset();
                
                }
                
            } else if(noofgames <= 5){
                    FinalResult = 'Pending....';
            }
        
        
        localStorage.setItem('score', JSON.stringify(score));
        document.querySelector('.js-score').innerHTML = `You choose ${playerChoice} and computer choose ${ComputerMove}. <br> ${result} <br> No Of Games: ${noofgames}   No of Wins: ${score.noOfWins} , No of Looses: ${score.noOfLooses} , No of Ties: ${score.noOfTies} <br> Final Result: ${FinalResult}`;
            
        }
        function computerChoise() {
        const RandomSelect = Math.random();
        let ComputerMove;
        if (RandomSelect >= 0 && RandomSelect < 1 / 3) {
            ComputerMove = 'Rock';
        } else if (RandomSelect >= 1 / 3 && RandomSelect < 2 / 3) {
            ComputerMove = 'Paper';
        } else if (RandomSelect >= 2 / 3 && RandomSelect <= 1) {
            ComputerMove = 'Scissors';
        }
        return ComputerMove;
        }
        function reset(){
        score.noOfWins = 0;
        score.noOfLooses = 0;
        score.noOfTies = 0;
        localStorage.removeItem('score');
        
        document.querySelector('.js-score').innerHTML = '';
        }

        document.querySelector('.chances').innerHTML = `You have 5 chances to play the game.`;