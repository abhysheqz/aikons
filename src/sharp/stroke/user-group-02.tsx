import React from "react";
const UserGroup_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.5 19.5V18a6.04 6.04 0 0 0-4.5-2 6.04 6.04 0 0 0-4.5 2v1.5"
      />
      <circle
        cx={12}
        cy={11}
        r={2.5}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 11c1.59 0 3.017.773 4 2v1.5"
      />
      <circle
        cx={17.5}
        cy={6.5}
        r={2}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6.5 11c-1.59 0-3.017.773-4 2v1.5"
      />
      <circle
        cx={6.5}
        cy={6.5}
        r={2}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default UserGroup_02;
