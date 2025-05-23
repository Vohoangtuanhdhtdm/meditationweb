export interface CourseDto {
  id: string;
  title: string;
  description: string;
  price: number;
  ctvId: string;
  phaseCourses: PhaseCourseDto[];
}

export interface CreateCourseDto {
  title: string;
  description: string;
  price: number;
  ctvId: string;
}

export interface PhaseCourseDto {
  id: string;
  title: string;
  courseId: string;
  contentCourse: ContentCourseDto[];
}

export interface CreatePhaseCourseDto {
  title: string;
  courseId: string;
}

export interface ContentCourseDto {
  id: string;
  title: string;
  description: string;
  phaseCourseId: string;
  lessonCourse: LessonCourseDto[];
}

export interface CreateContentCourseDto {
  title: string;
  description: string;
  phaseCourseId: string;
}

export interface LessonCourseDto {
  id: string;
  title: string;
  videoUrl: string;
  duration: number;
  contentCourseId: string;
}

export interface CreateLessonCourseDto {
  title: string;
  videoUrl: string;
  duration: number;
  contentCourseId: string;
}
