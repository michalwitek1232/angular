export interface User {
  id: number;
  username: string;
  name: string;
  surname: string;
  age: number;
  created: Date;
  lastActive: Date;
  city: string;
  photoUrl?: any;
}
