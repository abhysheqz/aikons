import React from "react";
const ChessPawn: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.5 22.75h-17l1.5-4h14zM16 10.75h-.735c.088 2.195.596 4.346 2.117 6.5H6.62c1.52-2.154 2.03-4.305 2.117-6.5h-.735v-1.5h8zM12 1.25a4.25 4.25 0 0 0-3.606 6.5h7.212A4.25 4.25 0 0 0 12 1.25"
      />
    </svg>
  );
};
export default ChessPawn;
