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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 17.484c1.676-.715 3-2.28 3-5.465C18 7.602 15 2 12 2S6 7.601 6 12.02c0 3.184 1.324 4.765 3 5.48"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 15 2.5-2.5M12 13l-2.5-2.5M10 22h4"
      />
    </svg>
  );
};
export default Tree_05;
