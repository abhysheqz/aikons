import React from "react";
const UserWarning_02: React.FC<
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
        d="M18 20v-2.03c0-1.242-.56-2.46-1.69-2.975-1.378-.629-3.032-.995-4.81-.995s-3.431.366-4.81.995C5.56 15.51 5 16.728 5 17.97V20"
      />
      <circle
        cx={11.5}
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
        d="M19 6v4M19 13v.01"
      />
    </svg>
  );
};
export default UserWarning_02;
