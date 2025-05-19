import React from "react";
const Logout_05: React.FC<
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
        d="M6 6.5C4.159 8.148 3 10.335 3 13a9 9 0 1 0 18 0c0-2.665-1.159-4.852-3-6.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 12V2.746M15 5l-3-3-3 3"
      />
    </svg>
  );
};
export default Logout_05;
