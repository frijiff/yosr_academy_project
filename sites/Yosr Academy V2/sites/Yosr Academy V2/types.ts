export type SubjectChoice = 'french' | 'english' | 'both';

export interface ChildInfo {
  id: string;
  name: string;
  grade: Grade;
  subject: SubjectChoice;
}

export enum Grade {
  Primary = 'إبتدائي (Primary)',
  Middle = 'إعدادي (Collège)',
  Secondary = 'ثانوي (Lycée)',
  Bac = 'باكالوريا (Bac)'
}