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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 20v-2.03c0-1.242-.56-2.46-1.69-2.975C13.431 14.366 11.778 14 10 14s-3.431.366-4.81.995c-1.13.515-1.69 1.733-1.69 2.975V20M20.5 20.001v-2.03c0-1.242-.56-2.46-1.69-2.975q-.39-.18-.81-.328"
      />
      <circle
        cx={10}
        cy={7.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 4.145a3.502 3.502 0 0 1 0 6.71"
      />
    </svg>
  );
};
export default UserMultiple_03;
