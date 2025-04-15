import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
 <div className="bg-red-200">
  prince you are millionaire
  <Button variant="destructive">select</Button>
  <UserButton/>
 </div>
  );
}
