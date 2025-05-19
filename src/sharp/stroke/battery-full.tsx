import React from "react";
const BatteryFull: React.FC<
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
        d="M19 6H2v12h17z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19 9.5 3 .507v3.986l-3 .507"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 9v6M9 9v6M12 9v6M15 9v6"
      />
    </svg>
  );
};
export default BatteryFull;
