import React from "react";
const Qwen: React.FC<
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
        d="M9 2h3.5L14 4.5h5.13L20.5 7m1.5 7.5-1.645 2.663h-2.477L15 22h-3.217M5 20l-1.5-2.5 1-3-2.5-5L4 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.19 9.662 1.31-2.661H10l1-2-2-3-2.251 5H4l5 10H6l-1 3h5.5l1.252 2 5.65-9.935L18.94 14.5H22z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15.5 9 10h6z"
      />
    </svg>
  );
};
export default Qwen;
