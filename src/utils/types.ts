export interface IProject {
  name: string;
}

export interface IContact {
  index: number;
  title: string;
  link: string;
}

export interface IProjectData {
  index: number,
  name: string,
  stack: string[],
  link: string,
  image: string,
  linkCode: string,
  imageCode: string;
}
