import React from "react";
const PointingRight_04: React.FC<
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
        strokeWidth={1.5}
        d="M8.47 9.916H13m0 0h6.25a1.75 1.75 0 1 1 0 3.5H14V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8.5l3.857-2.513c1.328-.871 1.942-.97 2.613-.986a3 3 0 0 1 .895.115c.646.184 1.19.66 2.28 1.614zM16 4.5h5.493M19.5 2 22 4.5 19.5 7"
      />
    </svg>
  );
};
export default PointingRight_04;
