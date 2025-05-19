import React from "react";
const AddFemale: React.FC<
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
        d="m7.232 15.25-4.446 1.128a2 2 0 0 0-1.51 1.884l-.026.961a1 1 0 0 0 1.002 1.027h9.988v-7.155c1.287-.163 2.474-.448 3.506-.829-.334-.656-1.002-2.558-1.002-4.92 0-2.951 0-5.411-3.004-4.92C10.237.46 4.728.46 4.728 6.364c0 3.443-.5 4.92-1.001 5.903 1.032.381 2.218.666 3.505.829z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 13.75a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddFemale;
