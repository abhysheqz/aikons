import React from "react";
const ServingFood: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 14h18M5 22l.93-.93c.53-.53.794-.794 1.127-.944s.706-.174 1.452-.22l3.253-.204c1.598-.1 2.398-.15 3.101-.487.703-.338 1.242-.93 2.32-2.116L20 14h-3.5l-1.793 1.793c-.12.12-.179.179-.24.231a2 2 0 0 1-1.133.47c-.081.006-.165.006-.334.006M2 19l3.078-3.078c.739-.739 1.108-1.108 1.544-1.366a4 4 0 0 1 1.039-.43C8.15 14 8.673 14 9.718 14h.782c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89m0 0H9.5M5 11.5a8 8 0 0 1 8-8m0 0a8 8 0 0 1 8 8m-8-8V2"
      />
    </svg>
  );
};
export default ServingFood;
