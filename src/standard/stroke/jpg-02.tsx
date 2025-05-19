import React from "react";
const Jpg_02: React.FC<
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
        d="M19 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l7 7v2m-.5-2h-4.502a2 2 0 0 1-2-2V2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 15v-1h-3.5v5H21v-2h-1m-9.5-3v3.25A1.75 1.75 0 0 1 8.75 19h-.083C7.747 19 7 18.254 7 17.333M12.5 19v-2m0 0v-3H14a1.5 1.5 0 0 1 0 3z"
      />
    </svg>
  );
};
export default Jpg_02;
