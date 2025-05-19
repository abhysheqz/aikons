import React from "react";
const Compass_01: React.FC<
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
        d="m4.076 21.48 5-12.115 1.846.77-5 12.115zm14 .77-5-12.115 1.846-.77 5 12.116zM13 1.75v3h-2v-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 7.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.699 12.2c1.855 2.772 4.894 4.55 8.301 4.55s6.447-1.778 8.302-4.55L22 13.3c-2.193 3.277-5.842 5.45-10 5.45S4.193 16.577 2 13.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 19.75v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Compass_01;
