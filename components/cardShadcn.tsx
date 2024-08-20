"use client"
import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

type CardProps = React.ComponentProps<typeof Card> & {
  title: string;
  description: string;
  notifications: { title: string; description: string }[];
};

export function CardDemo({ title, description, notifications, className, ...props }: CardProps) {
  return (
    <motion.div 
    initial={{ opacity: 1 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.3} }}
    className="z-20 cursor-pointer">
    <Card className={cn("w-[400px] bg-white ", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        {/*  */}
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/contact">
        <Button className="w-full">
           Prendre rendez-vous
        </Button>
        </Link>
      </CardFooter>
    </Card>
    </motion.div>
  );
}
