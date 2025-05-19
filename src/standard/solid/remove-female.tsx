import React from "react";
const RemoveFemale: React.FC<
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
        d="m7.732 15.25-4.446 1.128a2 2 0 0 0-1.51 1.884l-.026.961a1 1 0 0 0 1.002 1.027h9.988v-7.155c1.287-.163 2.474-.448 3.506-.829-.334-.656-1.002-2.558-1.002-4.92 0-2.951 0-5.41-3.004-4.92C10.737.46 5.228.46 5.228 6.364c0 3.443-.5 4.92-1.001 5.903 1.032.381 2.218.666 3.505.829z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.543 16.043a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoveFemale;
