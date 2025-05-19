import React from "react";
const Dress_04: React.FC<
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
        d="M9 4V2M15 4V2M14 15.003s2 3 2 6.502m-6-6.502s-2 3-2 6.502"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 10 7.322 6.645A1 1 0 0 1 7.51 5.49L9 4l3 2 3-2 1.49 1.49a1 1 0 0 1 .188 1.155L15 10m-6 0c-1.541 1.233-4.507 4.631-4.945 8.93a1.56 1.56 0 0 0 .882 1.584C6.366 21.188 8.878 22 12 22s5.634-.812 7.063-1.486c.604-.285.95-.918.882-1.583-.438-4.3-3.404-7.698-4.945-8.931m-6 0h6"
      />
    </svg>
  );
};
export default Dress_04;
