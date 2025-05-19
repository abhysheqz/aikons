import React from "react";
const Honor: React.FC<
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
        d="M1.5 3a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 15.979V2.999H3.75v12.98c0 .25.124.483.331.622l7.437 5.002a.85.85 0 0 0 .948 0l7.452-5.001a.75.75 0 0 0 .332-.623M9.5 7a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Honor;
