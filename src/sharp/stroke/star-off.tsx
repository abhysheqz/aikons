import React from "react";
const StarOff: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.153 9.153 2.5 9.478l5.278 4.633L5.849 21.5 12 17.278l6.151 4.222-1.183-4.532m-6.713-9.895L12 2.5l2.533 6.638 6.967.34-4.707 4.133"
      />
    </svg>
  );
};
export default StarOff;
