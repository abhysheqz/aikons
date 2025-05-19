import React from "react";
const BodyPartLeg: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.002 2C7.693 2.314 17 4 20 12l-4.901 10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.002 12c1 1.726 4.164 2.596 8 1.726-1.459.592-4.375 3.074-4.375 8.274M5.002 7 12 9.5"
      />
    </svg>
  );
};
export default BodyPartLeg;
