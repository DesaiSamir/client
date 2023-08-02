// interfaces/CourseContent.ts
export interface Content {
    title: string;
    subTitle?: string;
    image?: string;
    video?: string;
    description?: string;
    childTitles?: { title: string; content?: string }[];
  }
  
  export interface Course {
    id: number;
    title: string;
    content?: Content[];
    subChapters?: Course[];
  }
  