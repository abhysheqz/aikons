import React from "react";
const Triangle_02: React.FC<
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
        d="m19.496 12.632.363.633c1.726 3 2.589 4.5 1.908 5.618C21.087 20 19.31 20 15.757 20H15M4.505 12.632l-.364.633c-1.726 3-2.589 4.5-1.908 5.618C2.913 20 4.69 20 8.243 20H9M7.533 7.366l.365-.633C9.712 3.578 10.619 2 12 2c1.38 0 2.288 1.578 4.102 4.733l.365.633M12 18v4M19.66 9l-3.464 2M4.34 9l3.464 2"
      />
    </svg>
  );
};
export default Triangle_02;
