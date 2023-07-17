export interface HashComparer {
  compare(password: string, hashedText: string): boolean;
}
