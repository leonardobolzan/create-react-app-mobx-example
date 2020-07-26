import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("ExampleStore")
@observer
export default class Example extends Component {
  handleSubmit = (e) => {
    const { addNumber } = this.props.ExampleStore;

    e.preventDefault();
    this.numberInput.value && addNumber(this.numberInput.value);
    e.target.reset();
  };

  render() {
    const { numbers, numberCount } = this.props.ExampleStore;

    return (
      <div>
        <h2>Números adicionados: {numberCount}</h2>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="number"
            ref={(input) => (this.numberInput = input)}
            placeholder="Adicione um número"
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    );
  }
}
