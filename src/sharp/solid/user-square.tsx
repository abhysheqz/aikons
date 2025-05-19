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
        d="M21.75 2.25H2.25v19.5h19.5zm-13 7.25a3.25 3.25 0 1 1 4.667 2.926A5.75 5.75 0 0 1 17.75 18v.75H6.25V18a5.75 5.75 0 0 1 4.333-5.574A3.25 3.25 0 0 1 8.75 9.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserSquare;
