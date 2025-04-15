import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
 <div className="bg-red-200">
  prince you are becoming hot and sexy
  <Button variant="destructive">select</Button>
  <UserButton/>
 </div>
  );
}
