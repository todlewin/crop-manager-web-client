export interface Plant {
  name: string;
  code: string;
  description: string;
  sow: string;
  depth: number;
  imageURL: string;
}

export class PlantImpl implements Plant {

  constructor(public name: string,
              public code: string,
              public description: string,
              public sow: string,
              public depth: number,
              public imageURL: string) {

  }

}
