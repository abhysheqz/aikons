import React from "react";
const Home_08: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.088 4.762-1 .781c-1.516 1.184-2.275 1.776-2.681 2.61C3 8.988 3 9.952 3 11.88v2.092c0 3.784 0 5.676 1.172 6.852S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.176S21 17.756 21 13.971v-2.09c0-1.929 0-2.893-.407-3.728-.407-.834-1.165-1.426-2.681-2.61l-1-.78C14.552 2.92 13.372 2 12 2s-2.552.92-4.912 2.762Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 16.5h2v2m-2-2v2h2m-2-2 2 2"
      />
    </svg>
  );
};
export default Home_08;
