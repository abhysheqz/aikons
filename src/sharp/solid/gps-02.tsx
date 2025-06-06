import React from "react";
const Gps_02: React.FC<
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
        d="M13 3.055A9.004 9.004 0 0 1 20.945 11h1.805v2h-1.805A9.004 9.004 0 0 1 13 20.945v1.805h-2v-1.805A9.004 9.004 0 0 1 3.055 13H1.25v-2h1.805A9.004 9.004 0 0 1 11 3.055V1.25h2zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gps_02;
