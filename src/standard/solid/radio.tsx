import React from "react";
const Radio: React.FC<
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
        d="M13.858 1.986a1 1 0 0 1-.344 1.372l-5 3a1 1 0 1 1-1.028-1.715l5-3a1 1 0 0 1 1.371.343"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 8.5A3.75 3.75 0 0 1 5 4.75h14a3.75 3.75 0 0 1 3.75 3.75v10A3.75 3.75 0 0 1 19 22.25H5a3.75 3.75 0 0 1-3.75-3.75zm13.082 1.832a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5.5 10.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radio;
