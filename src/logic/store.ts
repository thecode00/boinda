// Singleton

class Store {
  private subscribers: any = {};

  constructor() {}

  dataToWasm(data: any) {
    const dataEvent = new CustomEvent("data-to-pyscript", {
      detail: { data, key: "file" },
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
    console.log(data);
    this.subscribers[key].map((call) => {
      call(data);
    });
  }
}

export default new Store();
