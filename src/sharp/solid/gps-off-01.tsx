import React from "react";
const GpsOff_01: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM20.945 11A9.004 9.004 0 0 0 13 3.055V1.25h-2v1.805a8.9 8.9 0 0 0-3.348 1.063l1.49 1.49a7 7 0 0 1 9.25 9.25l1.49 1.49A8.9 8.9 0 0 0 20.945 13h1.805v-2z"
      />
      <path
        fill="currentColor"
        d="M13 22.75v-1.805a8.97 8.97 0 0 0 5.363-2.58L5.636 5.637A8.97 8.97 0 0 0 3.055 11H1.25v2h1.805A9.004 9.004 0 0 0 11 20.945v1.805z"
      />
    </svg>
  );
};
export default GpsOff_01;
