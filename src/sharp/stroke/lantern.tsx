import React from "react";
const Lantern: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 7.5h12v11h-12zM6.5 7.5C7.217 5.41 9.229 4 11.495 4h2.01c2.266 0 4.278 1.41 4.995 3.5zM18.5 18.5c-.717 2.09-2.729 3.5-4.995 3.5h-2.01c-2.266 0-4.278-1.41-4.995-3.5zM6.5 7.5H5L6.5 9m12-1.5H20L18.5 9M18.5 18.5H20L18.5 17m-12 1.5H5L6.5 17M21 11.5l1.5-1.5M21 14.5l1.5 1.5M4 11.5 2.5 10M4 14.5 2.5 16M12.5 11v4M12.5 2v2"
      />
    </svg>
  );
};
export default Lantern;
