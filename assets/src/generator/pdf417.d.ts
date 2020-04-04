declare module 'pdf417-generator' {
  export function draw(
    code: string,
    canvas: HTMLCanvasElement,
    aspectratio?: number,
    errorCorrectionLevel?: number,
    devicePixelRatio?: number
  ): void;
}
