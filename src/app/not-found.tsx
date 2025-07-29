import Link from "next/link";
import { WarningCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="flex min-h-[80dvh] w-full items-center justify-center text-white">
      <Card className="border-0 bg-transparent text-white max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center">
            <WarningCircleIcon
              size={64}
              weight="duotone"
              className="text-red-400 animate-fade-in"
            />
          </div>
          <h1 className="text-3xl font-bold mt-4 text-red-400">
            404 - Not Found
          </h1>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-white/80">
            The page you{`'`}re trying to reach doesn{`'`}t exist or has been
            moved.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button
              size={"lg"}
              className="border-red-400/20 text-red-400 bg-transparent border hover:bg-red-400 hover:text-black transition-colors duration-200"
            >
              Go Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
