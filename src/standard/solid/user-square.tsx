import React from "react";
const UserSquare: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M4.866 2.25A2.616 2.616 0 0 0 2.25 4.866v14.268a2.616 2.616 0 0 0 2.616 2.616h14.268a2.616 2.616 0 0 0 2.616-2.616V4.866a2.616 2.616 0 0 0-2.616-2.616zm7.134 4a3.25 3.25 0 0 0-1.415 6.176 5.75 5.75 0 0 0-4.335 5.575c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75 5.75 5.75 0 0 0-4.334-5.575A3.25 3.25 0 0 0 12 6.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserSquare;
