import React from "react";
const Lamp_03: React.FC<
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
        d="M11.97 9.99v9.006M6.99 21.986h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.98 21.999.996-3.003h3.986L14.959 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.457 9.99v3.003"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.891 9.99H7.083c-.067 0-1.101.073-1.083 0L8.983 2h5.972L18 9.991c.019.072-1.04-.001-1.108-.001Z"
      />
    </svg>
  );
};
export default Lamp_03;
