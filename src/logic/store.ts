// Singleton
import * as d3 from "d3";
class Store {
  private subscribers: any = {};

  constructor() {}

  requestToPyscript(data: any, key: string) {
    const dataEvent = new CustomEvent("data-to-pyscript", {
      detail: { data, key },
    });
    document.dispatchEvent(dataEvent);
  }

  subscribe(key: string, callback: any) {
    this.subscribers[key].push(callback);
  }

  unsubscribe(key: string, callback: any) {
    this.subscribers[key] = this.subscribers[key].filter(
      (cb) => cb !== callback
    );
  }

  _notify(key: string, data: any) {
    // d3.csvParse(data);
    console.log(data);
    if (this.subscribers[key]) {
      this.subscribers[key].map((call) => {
        call(data);
      });
    }
  }
}

export default new Store();
