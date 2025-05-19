import React from "react";
const DragRight_01: React.FC<
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
        strokeWidth={1.5}
        d="M8.554 21.742V19.76l-4.22-5.557a1.3 1.3 0 0 1-.222-.402 2.4 2.4 0 0 1-.096-.815 1.3 1.3 0 0 1 .204-.627c.07-.11.137-.2.205-.282.415-.494 1.155-.645 1.754-.404.166.067.305.147.403.251.779.83 1.261 1.334 2.087 2.247V6.517c0-.453.146-.935.488-1.232.811-.705 1.548-.696 2.375 0 .356.3.435.768.435 1.232v3.37c2.33-.176 4.911.926 6.147 2.08.477.444.834 1.043.867 1.694a6.61 6.61 0 0 1-.276 2.174c-.354 1.214-.527 1.588-1.707 3.924v2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.696 8.26a3.5 3.5 0 1 1 3.608 0M13.46 4.757h6.529m-2.494-2.505 2.515 2.517-2.515 2.499"
      />
    </svg>
  );
};
export default DragRight_01;
