export class Marker {
  MarkerName: string;
  Respondido: boolean;
  Correto: boolean;

  public _init(marker: any) {
    this.MarkerName = marker.MarkerName;
    this.Respondido = marker.Respondido;
    this.Correto = marker.Correto;
  }

  public isCorreto(): boolean {
    return this.Correto;
  }

  public isRespondido(): boolean {
    return this.Respondido;
  }
}