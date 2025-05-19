import React from "react";
const Unarchive_03: React.FC<
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
        d="M21 7H3v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM21 7H3l2.4-3.2A2 2 0 0 1 7 3h10a2 2 0 0 1 1.6.8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11v6.5m-3-4 3-3 3 3"
      />
    </svg>
  );
};
export default Unarchive_03;
