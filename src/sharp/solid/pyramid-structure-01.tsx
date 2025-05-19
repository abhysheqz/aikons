import React from "react";
const PyramidStructure_01: React.FC<
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
        d="m12 .455 4.053 7.294H7.948zM7.114 9.25h9.772l2.5 4.5H4.614zM3.781 15.25H20.22l3.056 5.5H.725z"
      />
    </svg>
  );
};
export default PyramidStructure_01;
