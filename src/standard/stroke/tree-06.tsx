import React from "react";
const Tree_06: React.FC<
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
        d="M12 22V9M9 18.002C7.498 18 5.998 16.5 5.998 15 4.498 15 3 13.5 3 11.502 3 10.005 3.998 9 5.498 8.5 5.33 8.126 5 7.439 5 7.002a3 3 0 0 1 4.105-2.79A3 3 0 0 1 12 2.002m2.998 16C16.5 18 18 16.5 18 15c1.5 0 2.998-1.5 2.998-3.498C20.998 10.005 20 9 18.5 8.5c.168-.374.498-1.061.498-1.498a3 3 0 0 0-4.105-2.79 3 3 0 0 0-2.895-2.21M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4"
      />
    </svg>
  );
};
export default Tree_06;
