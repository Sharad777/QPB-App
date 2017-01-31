export class Option {
  public id: number;
  public description: string;

  constructor(description: string, id?: number) {
    this.id = id;
    this.description = description;
  }
}