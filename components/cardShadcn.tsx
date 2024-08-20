"use client";
import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
      className="z-20 cursor-pointer"
    >
      <Card 
        className={cn(
          "w-[90%] sm:w-[300px] lg:w-[250px] 2xl:w-[400px]",
          "h-[400px] sm:h-[500px] lg:h-[600px] 2xl:h-[800px]",
          "bg-white shadow-md rounded-lg flex flex-col justify-between", // Flexbox for positioning
          className
        )}
        {...props}
      >
        {/* Card Header (Title) - Always at the top */}
        <CardHeader className="flex-none">
          <CardTitle className="text-lg sm:text-xl 2xl:text-2xl">{title}</CardTitle>
        </CardHeader>

        {/* Card Content - Grow to fill space between title and footer */}
        <CardContent className="flex-1 overflow-y-auto grid gap-4">
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm sm:text-base 2xl:text-lg font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-xs sm:text-sm 2xl:text-base text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Card Footer (Button) - Always at the bottom */}
        <CardFooter className="flex-none">
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
