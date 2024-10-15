"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface Item {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
}

interface ItemProps {
  item: Item;
}

export default function ProductCard({ item }: ItemProps) {
  const router = useRouter();

  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80 flex justify-center items-center">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="object-cover object-top max-h-52 w-auto"
          />
        </div>
        <div>
          <CardTitle className="text-base font-bold text-gray-900 truncate">
            {item?.title}
          </CardTitle>
          <div className="mt-4 flex items-center flex-wrap gap-2 justify-between">
            <p className="text-lg font-bold text-gray-800">{item?.price}</p>
            <div>
              <Button onClick={() => router.push(`/${item?.id}`)}>
                Details
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
