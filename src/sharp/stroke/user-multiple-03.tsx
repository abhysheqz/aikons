import React from "react";
const UserMultiple_03: React.FC<
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
        d="M16.5 20v-4c-1.597-1.227-3.917-2-6.5-2s-4.903.773-6.5 2v4M20.5 20v-4a8.6 8.6 0 0 0-1.5-.916"
      />
      <circle
        cx={10}
        cy={7.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 4.145a3.502 3.502 0 0 1 0 6.71"
      />
    </svg>
  );
};
export default UserMultiple_03;
