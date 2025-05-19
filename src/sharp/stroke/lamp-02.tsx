import React from "react";
const Lamp_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.015 14c0 1.657 1.34 3 2.993 3A2.996 2.996 0 0 0 15 14M12.008 20v2m2.993-3 1.995 1.5M9.015 19 7.02 20.5M12.008 8V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6.509 10.026-2.41 3.83a.1.1 0 0 0 .084.153h15.635a.1.1 0 0 0 .084-.153l-2.385-3.83-5.464-2.038z"
      />
    </svg>
  );
};
export default Lamp_02;
