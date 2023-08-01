export interface TokenDecrypter {
  decrypt(value: string, secret: string): string;
}
