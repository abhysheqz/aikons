import React from "react";
const AddTeam_02: React.FC<
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
        d="M3 20v-4c1.597-1.227 3.917-2 6.5-2 1.245 0 2.429.18 3.5.503M18 14v6m-3-3h6"
      />
      <circle
        cx={9.5}
        cy={7.5}
        r={3.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 4.145a3.502 3.502 0 0 1 0 6.71"
      />
    </svg>
  );
};
export default AddTeam_02;
