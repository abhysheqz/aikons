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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.002 2c2.6.303 11.37 1.886 14.669 9.202.226.502.192 1.078-.05 1.573L15.098 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.002 12c.996 1 3.996 2.5 7.996 2-1.5.099-4.371 2.8-4.371 8M5.002 7c3 .5 4.5 1 6.998 2.5"
      />
    </svg>
  );
};
export default BodyPartLeg;
