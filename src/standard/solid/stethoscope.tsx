import React from "react";
const Stethoscope: React.FC<
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
        d="M9 13a1 1 0 0 1 1 1v3.5a3.5 3.5 0 0 0 7 0V16a1 1 0 1 1 2 0v1.5a5.5 5.5 0 0 1-11 0V14a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.999 3C4.484 3 4 3.446 4 4.08V5a1 1 0 0 0 .4.8l4 3a1 1 0 0 0 1.2 0l4-3A1 1 0 0 0 14 5v-.92c0-.634-.484-1.08-.999-1.08a1 1 0 1 1 0-2C14.695 1 16 2.417 16 4.08V5a3 3 0 0 1-.516 1.683 1 1 0 0 1-.073.23l-2.381 5.239a2 2 0 0 1-.72.841l-2.79 1.842a1 1 0 0 1-1.109-.006l-2.735-1.841a2 2 0 0 1-.703-.832L2.59 6.914a1 1 0 0 1-.073-.23A3 3 0 0 1 2 5v-.92C2 2.417 3.305 1 4.999 1a1 1 0 1 1 0 2M18 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2.5a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stethoscope;
