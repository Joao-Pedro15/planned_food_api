export interface TokenGenerator {
  generate(id: string, secret: string, timmer: number | string = '2 days'): Promise<string>;
}