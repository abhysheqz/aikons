import React from "react";
const Satellite: React.FC<
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
        d="m9.75 22-3.5-8-3.5 8z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.25 9.588a9.412 9.412 0 0 0 16 6.722L7.94 3a9.38 9.38 0 0 0-2.69 6.588Z"
      />
      <circle cx={19.25} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.25 7 5.5-1.5-1.5 5.5"
      />
    </svg>
  );
};
export default Satellite;
