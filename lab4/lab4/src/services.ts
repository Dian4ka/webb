// Класс для роботи з localStorage
export class StorageService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    const ERORR_FOR_LINT = 1;
  }

  load<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  clear(): void {
    localStorage.clear();
  }
}
