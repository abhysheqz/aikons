import React from "react";
const Dress_03: React.FC<
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
        d="m15 4 .53-.53a.75.75 0 0 0-.947-.094zm-3 2-.417.624.416.277.416-.277zm3 4v.75a.75.75 0 0 0 .67-.415zM9 4l.415-.624a.75.75 0 0 0-.946.094zM7 6l-.53-.53a.75.75 0 0 0-.14.865zm2 4-.671.335a.75.75 0 0 0 .67.415zm8-4 .67.335a.75.75 0 0 0-.14-.865zm-2.417-2.624-3 2 .832 1.248 3-2zm-6 1.248 3 2 .832-1.248-3-2zM6.33 6.335l2 4 1.341-.67-2-4zM15 9.25H9v1.5h6zm-.53-4.72 2 2 1.061-1.06-2-2zm1.86 1.135-2 4 1.341.67 2-4zM8.47 3.47l-2 2L7.53 6.53l2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4V2M15 4V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 10h5M18 19c2 0 3-2 3-2-3.6-2.34-5.333-5.374-6-7H9c-.667 1.626-2.4 4.66-6 7 0 0 1 2 3 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.706 14c.34.796 3.674 4.86 5.295 6.5-1.136.777-4 1.5-7 1.5s-5.864-.723-7-1.5c1.62-1.64 4.954-5.704 5.294-6.5"
      />
    </svg>
  );
};
export default Dress_03;
