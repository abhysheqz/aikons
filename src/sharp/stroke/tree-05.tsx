import React from "react";
const Tree_05: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 17.484c1.676-.715 3-2.28 3-5.465 0-4.418-3-10-6-10s-6 5.582-6 10c0 3.185 1.324 4.75 3 5.465M10 22h2m0 0h2m-2 0v-7m0 0 2.5-2.5M12 15v-2m0 0V9m0 4-2.5-2.5"
      />
    </svg>
  );
};
export default Tree_05;
