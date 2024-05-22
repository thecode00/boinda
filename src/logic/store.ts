class Store {
  private subscribers: any = {};

  constructor() {}

  dataToWasm(data: any) {
    const dataEvent = new CustomEvent("data-to-pyscript", {
      detail: { data },
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

  notify(key: string) {
    this.subscribers[key].map((call) => {
      call();
    });
  }
}

export default new Store();
