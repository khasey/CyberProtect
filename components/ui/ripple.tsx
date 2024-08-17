import Ripple from "@/components/magicui/ripple";

export function RippleDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        SQL
      </p>
      <Ripple />
    </div>
  );
}
