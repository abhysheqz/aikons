import React from "react";
const CircleArrowReload_02: React.FC<
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
        fillRule="evenodd"
        d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75M13.705 8a.75.75 0 0 1 1.226-.58l3.045 2.5-.951 1.16-1.82-1.494v7.163L12 16.75v-1.5h1.704zM12 8.75h-1.704V16a.75.75 0 0 1-1.226.58l-3.046-2.5.952-1.16 1.82 1.495V7.25H12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowReload_02;
