

export interface CharacterInterface  {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?:  Origin;
  location?: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}
