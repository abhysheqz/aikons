import React from "react";
const Pulse_02: React.FC<
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
        d="M13.256 6h2.064l1.668 8.339L18.323 11H22v2h-2.323l-2 5H15.68l-1.574-7.872L13.244 13h-2.023l-1 3H8.246l-1.59-5.566L5.692 13H2v-2h2.307l1.5-4h1.947l1.55 5.425L9.78 11h1.977z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pulse_02;
