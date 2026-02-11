
export type SubjectChoice = 'french' | 'english' | 'both';

export interface ChildInfo {
  id: string;
  name: string;
  grade: string;
  subject: SubjectChoice;
}

export enum Grade {
  Primary = 'إبتدائي',
  Middle = 'إعدادي',
  Secondary = 'ثانوي',
  Bac = 'باكالوريا'
}
