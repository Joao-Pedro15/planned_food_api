export interface TokenDecrypter {
  decrypt(value: string, secret: string): Promise<string>;
}
