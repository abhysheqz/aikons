import React from "react";
const Yen: React.FC<
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
        d="M5 3c.467 1.731 2.52 5.667 7 7.556m0 0C16.48 8.666 18.533 4.73 19 3m-7 7.556V21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.166 13h11.667M6.166 17h11.667"
      />
    </svg>
  );
};
export default Yen;
