interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export { User };
