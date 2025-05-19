import React from "react";
const DragLeft_01: React.FC<
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
        d="M10.711 8.146a3.5 3.5 0 0 1-1.693-3c0-1.933 1.564-3.5 3.494-3.5a3.497 3.497 0 0 1 3.495 3.5 3.5 3.5 0 0 1-1.693 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.563 21.63v-1.984l-4.219-5.557a1.3 1.3 0 0 1-.222-.402 2.4 2.4 0 0 1-.097-.815 1.3 1.3 0 0 1 .205-.627c.07-.11.137-.201.205-.282.415-.494 1.155-.645 1.754-.404.166.067.304.146.403.251.779.83 1.26 1.334 2.087 2.247V6.404c0-.453.145-.936.488-1.233.811-.704 1.548-.695 2.375 0 .355.3.435.768.435 1.233v3.369c2.33-.175 4.911.927 6.147 2.08.477.445.834 1.043.867 1.694a6.616 6.616 0 0 1-.276 2.174c-.354 1.215-.528 1.588-1.707 3.925v2M8.506 4.648l-4.952.03m1.962-2.53L2.998 4.682l2.514 2.466"
      />
    </svg>
  );
};
export default DragLeft_01;
