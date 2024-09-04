import { buttonVariants } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";

export default function Page() {
  return (
    <main className="w-screen h-screen text-[#aaa] flex justify-center items-center flex-col bg-zinc-900">
      <h1>Login</h1>
      <form className="border border-zinc-700 rounded-xl p-5 space-y-5">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <a href={"/docs/doc1"} className={buttonVariants()}>
          Login
        </a>
      </form>
    </main>
  );
}
