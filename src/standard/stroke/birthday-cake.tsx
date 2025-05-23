import React from "react";
const BirthdayCake: React.FC<
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
        d="M13.5 4.5a1.5 1.5 0 1 1-3 0C10.5 3.672 12 2 12 2s1.5 1.672 1.5 2.5M12 6v3M5 15l1.215 5.436A2 2 0 0 0 8.167 22h7.667c.936 0 1.747-.649 1.951-1.563.334-1.491.84-3.754 1.215-5.437"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.599 9.02-8.838.022c-.593-.03-1.284-.021-1.865.044-2.275.255-3.538 3.945-.98 5.491.526.38.98.38 1.667.38 1.594.037 2.503-1.82 2.574-2.828.4 3.111 2.835 2.952 3.837 2.673s1.71-1.764 1.828-2.76c.118 1.094.716 2.334 1.777 2.772 1.099.454 2.28-.01 2.754-.456.844-.75 1.147-1.499 1.147-2.607C20.234 8.67 16.908 9 16.599 9.02"
      />
    </svg>
  );
};
export default BirthdayCake;
