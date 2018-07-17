import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} style={{margin:2}}>
    {text}
  </button>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [ 0, 0, 0, 0, 0, 0]
    }
  }

  arvouusi = () => () => {
    const value = Math.floor(Math.random() * this.props.anecdotes.length)
    this.setState({ selected: value })
  }

  vote = () => () => {
    const v = Object.assign(this.state.votes);
    v[this.state.selected] += 1
    this.setState({ v })
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br />
        <br />
        has {this.state.votes[this.state.selected]} votes
        <br />
        <Button handleClick={this.vote()} text="Vote" />
        <Button handleClick={this.arvouusi()} text="Next random anecdote" />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)