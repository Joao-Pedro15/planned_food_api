export interface TokenGenerator {
  generate(id: string, secret: string, timmer?: string | number): string;
}