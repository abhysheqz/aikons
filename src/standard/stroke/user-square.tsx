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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 18a5 5 0 0 0-10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 4.895C3 3.848 3.848 3 4.895 3h14.21C20.152 3 21 3.848 21 4.895v14.21A1.895 1.895 0 0 1 19.105 21H4.895A1.895 1.895 0 0 1 3 19.105z"
      />
    </svg>
  );
};
export default UserSquare;
