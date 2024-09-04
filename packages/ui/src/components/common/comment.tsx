interface props {
  name: string;
  email: string;
  body: string;
}

export default function CommentComp({ name, email, body }: props) {
  return (
    <div className="space-y-3 p-3 border border-zinc-700 flex-grow rounded-xl text-zinc-600 bg-zinc-800">
      <div className="text-primary">{name}</div>
      <span>{email}</span>
      <p className="text-zinc-500">{body}</p>
    </div>
  );
}
