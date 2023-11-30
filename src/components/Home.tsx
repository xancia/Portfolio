import { Button } from "./ui/button";
import { Icon } from "@iconify/react";


export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-red-300">
      Hello, World
      <Button>Click</Button>
      <Icon className="text-3xl" icon="material-symbols:home" />
    </div>
  );
}
