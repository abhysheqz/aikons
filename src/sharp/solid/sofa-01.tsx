import React from "react";
const Sofa_01: React.FC<
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
        d="M4 20.25v-3h2v3zm14 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.75 9.5a2 2 0 0 0-2 2v3H5.25v-3a2 2 0 1 0-3 1.732V17.5h19.5v-4.268a2 2 0 0 0-1-3.732"
      />
      <path
        fill="currentColor"
        d="M3.25 8.5v-2A2.75 2.75 0 0 1 6 3.75h12a2.75 2.75 0 0 1 2.75 2.75v2a3 3 0 0 0-3 3v2H6.25v-2a3 3 0 0 0-3-3"
      />
    </svg>
  );
};
export default Sofa_01;
