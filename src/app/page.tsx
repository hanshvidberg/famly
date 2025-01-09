import { ChildrenList } from "@/features/ChildrenList/ChildrenList";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <main className="max-w-5xl mx-auto">
        <ChildrenList />
      </main>
    </div>
  );
}
