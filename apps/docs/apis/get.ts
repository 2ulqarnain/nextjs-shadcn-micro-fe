export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getComments = async (limit: number = 10): Promise<Comment[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return data?.slice(0, limit);
};
