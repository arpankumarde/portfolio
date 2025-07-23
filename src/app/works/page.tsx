import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-dvh w-dvw flex flex-col gap-2 items-center justify-center text-2xl font-semibold">
      Coming Soon
      <Button className="bg-red-400 text-white" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default Page;
