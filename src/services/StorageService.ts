export class StorageService {
  constructor(private storage: Storage = localStorage) {}

  set(key: string, item: unknown) {
    this.storage.setItem(key, JSON.stringify(item));
  }

  get<T = unknown>(key: string) {
    const data = this.storage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    }

    return null;
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }
}

export const localStorageService = new StorageService();
