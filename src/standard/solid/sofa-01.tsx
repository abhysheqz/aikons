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
        d="M6 5a1 1 0 0 0-1 1v2.17c1.165.413 2 1.524 2 2.83v2h10v-2c0-1.306.835-2.417 2-2.83V6a1 1 0 0 0-1-1zm15 3.17V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2.17a3 3 0 0 0-1 5.066V15a3 3 0 0 0 3 3v2a1 1 0 1 0 2 0v-2h10v2a1 1 0 1 0 2 0v-2a3 3 0 0 0 3-3v-1.764a3.001 3.001 0 0 0-1-5.065"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sofa_01;
