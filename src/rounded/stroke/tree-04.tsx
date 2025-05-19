import React from "react";
const Tree_04: React.FC<
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
        d="M12 22V9M15 17.197A6 6 0 0 0 18 12a5.98 5.98 0 0 0-1.696-4.18 4.5 4.5 0 1 0-8.607 0A5.98 5.98 0 0 0 6 12c0 2.22 1.207 4.16 3 5.197M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4"
      />
    </svg>
  );
};
export default Tree_04;
