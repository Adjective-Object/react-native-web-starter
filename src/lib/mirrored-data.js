export default class MirroredData {
  constructor(local, remote) {
    this.local = local;
    this.remote = remote;
    for (const key of Object.getOwnPropertyNames(local)) {
      Object.defineProperty(this, key, { get: () => this.local[key] });
    }
  }

  update(newData) {
    return new MirroredData(newData, this.remote);
  }

  rollback() {
    return new MirroredData(this.remote, this.remote);
  }

  commit() {
    return new MirroredData(this.local, this.local);
  }

  isSyncronized() {
    return this.local == this.remote;
  }

  toJSON() {
    return this.local;
  }
}
