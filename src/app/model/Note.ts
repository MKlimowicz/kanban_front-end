export class Note {
  id: number;
  projectId: number;
  personId: number;
  projectName: string;
  content: string;
  title: string;
  categoryId: number;
  nameCategory: string;

  public toString = (): string => {
    return `Note (id: ${this.id}, projectId:  ${this.projectId}, personId:  ${this.personId},
    content: ${this.content}, title:  ${this.title}, categoryId: ${this.categoryId})`;
  }
}
