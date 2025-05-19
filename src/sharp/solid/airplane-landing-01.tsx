import React from "react";
const AirplaneLanding_01: React.FC<
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
        d="M22.25 20.75h-16v-2h16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.094 3.84a.75.75 0 0 1 .753-.59l3.044.084a.75.75 0 0 1 .726.67l.295 2.773c1.16.148 6.24.861 7.765 1.075 3.545.453 6.337 3.414 6.57 7.027v.006c.074 1.306-1.203 2.13-2.319 1.785l-6.19-1.789-1.987 1.445a.75.75 0 0 1-.626.12l-4.806-1.22a.75.75 0 0 1-.292-1.306l1.543-1.267-5.323-1.909a.75.75 0 0 1-.48-.867z"
      />
    </svg>
  );
};
export default AirplaneLanding_01;
