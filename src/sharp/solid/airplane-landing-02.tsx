import React from "react";
const AirplaneLanding_02: React.FC<
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
        d="M1.75 18.75h16v2h-16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.153 3.25a.75.75 0 0 1 .753.59l1.327 6.037a.75.75 0 0 1-.48.867l-5.323 1.91 1.543 1.266a.75.75 0 0 1-.292 1.306l-4.806 1.22a.75.75 0 0 1-.626-.12l-1.987-1.445-6.19 1.789c-1.116.345-2.393-.479-2.32-1.785l.001-.006c.233-3.613 3.025-6.574 6.57-7.027 1.525-.214 6.605-.927 7.765-1.075l.295-2.773a.75.75 0 0 1 .726-.67z"
      />
    </svg>
  );
};
export default AirplaneLanding_02;
