import Image from "next/image";

export function MonogramMark({ className }: { className?: string }) {
  return (
    <Image
      src="/icon.png"
      alt=""
      width={64}
      height={64}
      className={className}
      aria-hidden="true"
    />
  );
}
