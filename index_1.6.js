import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} style={{margin:5}}>
    {text}
  </button>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  kasvatahyva = () => () => this.setState({ hyva: this.state.hyva + 1 })
  kasvataneutraali = () => () => this.setState({ neutraali: this.state.neutraali + 1 })
  kasvatahuono = () => () => this.setState({ huono: this.state.huono + 1 })

  render() {
    return (
      <div>
        <Header text="Anna palautetta" />
        <div>
          <Button handleClick={this.kasvatahyva()} text="Hyvä" />
          <Button handleClick={this.kasvataneutraali()} text="Neutraali" />
          <Button handleClick={this.kasvatahuono()} text="Huono" />
        </div>
        <Header text="Statistiikka" />
        <div>
          <Statistic text="Hyvä" value={this.state.hyva} />
          <Statistic text="Neutraali" value={this.state.neutraali} />
          <Statistic text="Huono" value={this.state.huono} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)