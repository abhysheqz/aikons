import React from "react";
const Crane: React.FC<
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
        d="M14.833 16H4.575c-1.7 0-3.077 1.343-3.077 3s1.378 3 3.077 3h10.258c1.7 0 3.077-1.343 3.077-3s-1.378-3-3.077-3ZM9.705 4H4.58l-.004 9h9.232V8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.7 19h.009m-4.108 0h.01m8.187 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.268 6.5 16.884 2h3.067a.01.01 0 0 1 .01.01V4m0 1v1.5m0 1V9m0 1v2c.882 0 1.539.624 1.539 1.5 0 1.202-1.202 1.5-1.54 1.5-.336 0-1.204-.108-1.538-1"
      />
    </svg>
  );
};
export default Crane;
