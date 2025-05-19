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
      <circle
        cx={11.5}
        cy={7.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 6v4M19 13v.01M18 20v-4c-1.597-1.227-3.917-2-6.5-2s-4.903.773-6.5 2v4"
      />
    </svg>
  );
};
export default UserWarning_02;
