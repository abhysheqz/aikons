import React from "react";
const UserArrowLeftRight: React.FC<
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
        d="M17 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 20.5a7 7 0 1 0-14 0M19.5 11l1.39-1.174C21.63 9.2 22 8.888 22 8.5s-.37-.7-1.11-1.326L19.5 6M4.5 11 3.11 9.826C2.37 9.2 2 8.888 2 8.5s.37-.7 1.11-1.326L4.5 6"
      />
    </svg>
  );
};
export default UserArrowLeftRight;
