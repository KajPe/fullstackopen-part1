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

class Statistics extends React.Component {
  lukuja = () => {
    return this.values.hyva + this.values.neutraali + this.values.huono
  }

  keskiarvo = () => {
    return ((this.values.hyva - this.values.huono) / this.lukuja()).toFixed(1)
  }

  positiv = () => {
    return ((this.values.hyva / this.lukuja() ) * 100).toFixed(1).concat("%")
  }

  render() {
    this.values = this.props.values
    
    return (
      <div>
        <Statistic text="Hyvä" value={this.values.hyva} />
        <Statistic text="Neutraali" value={this.values.neutraali} />
        <Statistic text="Huono" value={this.values.huono} />
        <Statistic text="Keskiarvo" value={this.keskiarvo()} />
        <Statistic text="Positiivisia" value={this.positiv()} />
      </div>
    )
  }
}

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
        <Statistics values={this.state} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)