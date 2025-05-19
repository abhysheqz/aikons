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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 20h16M3.5 4 2 9.986l6.75 2.303L6 14.475l5 1.496 2.5-2.06 5.934 2.024A1.182 1.182 0 0 0 21 14.82c0-3.316-2.507-6.099-5.812-6.452L7 7.492 6.5 4z"
      />
    </svg>
  );
};
export default AirplaneLanding_01;
