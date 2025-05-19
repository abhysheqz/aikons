import React from "react";
const HandPointingRight_02: React.FC<
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
        d="m12.615 5.645 1.167 1.021h5.968a2.5 2.5 0 0 1 0 5h-4.5V16.5a3.75 3.75 0 0 1-3.75 3.75h-6a3.75 3.75 0 0 1-3.75-3.75V7.593L5.947 4.86c.693-.455 1.238-.734 1.724-.898.5-.168.903-.202 1.281-.211a3.8 3.8 0 0 1 1.12.144c.44.126.82.346 1.213.637.377.28.805.654 1.33 1.113"
      />
    </svg>
  );
};
export default HandPointingRight_02;
