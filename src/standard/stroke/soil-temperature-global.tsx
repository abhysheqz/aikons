import React from "react";
const SoilTemperatureGlobal: React.FC<
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
        d="M19 22a3 3 0 0 0 1.5-5.599V13.5a1.5 1.5 0 0 0-3 0v2.901A2.999 2.999 0 0 0 19 22M13 18c0-.5.5-1.5 1-2M22 8c-6.143 0-11.833 4.217-13.5 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4C13.432 4 6.318 9.984 4.5 18M2 10c.5 0 1.5 0 2.5.5M2 6c1.866 0 3.372.337 5 1M2 2c3.175 0 6 1 8.5 2.5"
      />
    </svg>
  );
};
export default SoilTemperatureGlobal;
