import { observable, action, computed } from "mobx";

class ExampleStore {
  @observable numbers = [];

  @action
  addNumber = (number) => {
    this.numbers.push(number);
  };

  @computed
  get numberCount() {
    return this.numbers.length;
  }
}

const singleton = new ExampleStore();
export default singleton;
