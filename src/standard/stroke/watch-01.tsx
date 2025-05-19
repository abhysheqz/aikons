import React from "react";
const Watch_01: React.FC<
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
      <circle cx={12} cy={12} r={7} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10v2.005L13 13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 6-.621-2.485A2 2 0 0 0 13.439 2h-2.877a2 2 0 0 0-1.94 1.515L8 6M16 18l-.621 2.485A2 2 0 0 1 13.439 22h-2.877a2 2 0 0 1-1.94-1.515L8 18"
      />
    </svg>
  );
};
export default Watch_01;
