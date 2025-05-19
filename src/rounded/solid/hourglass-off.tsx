import React from "react";
const HourglassOff: React.FC<
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
        d="M6 2a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2v2c0 2.855-1.348 5.403-3.437 6.826a1 1 0 0 1-1.126-1.652C16.944 9.147 18 7.237 18 5V3H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 23a1 1 0 1 1 0-2v-2a8 8 0 0 1 4.124-7A8 8 0 0 1 4 5V2.586l16 16V22.4c0 .283 0 .424-.088.512s-.23.088-.512.088z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HourglassOff;
