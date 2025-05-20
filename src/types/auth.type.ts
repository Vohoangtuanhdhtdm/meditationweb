export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrollCourses: { id: string; courseId: string; enrollDate: string }[];
}
