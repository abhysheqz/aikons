import React from "react";
const HandGrip: React.FC<
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
        d="M2 20c2-1.5 3.5-5 4-9l4 1.5s-2 1.99-1 4c-2 1.508-1 4-1 4-.555.837-1.5 1.5-3 1.5-1 0-2.11-.658-3-2M22 20c-2-1.5-3.5-5-4-9l-4 1.5s2 1.99 1 4c2 1.508 1 4 1 4 .555.837 1.5 1.5 3 1.5 1 0 2.11-.658 3-2M9.5 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M8 11.5l2-5M16 11.5 15 9"
      />
    </svg>
  );
};
export default HandGrip;
