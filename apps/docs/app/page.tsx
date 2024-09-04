import CommentComp from "@repo/ui/components/common/comment";
import { getComments } from "~/apis/get";

export default async function Page() {

  const comments = await getComments();

  return comments.map((comment) => <CommentComp key={comment.id} {...comment} />);
  
}