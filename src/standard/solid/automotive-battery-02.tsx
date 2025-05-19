import React from "react";
const AutomotiveBattery_02: React.FC<
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
        d="M4 5.5h16a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2m9.136 3.897a.75.75 0 1 0-1.272-.795l-2.5 4A.75.75 0 0 0 10 13.75h2.647l-1.783 2.852a.75.75 0 0 0 1.272.796l2.5-4A.75.75 0 0 0 14 12.25h-2.647z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.5 2.25a.75.75 0 0 0-.75.75v1h5V3A.75.75 0 0 0 9 2.25zM19.25 4h-5V3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75z"
      />
    </svg>
  );
};
export default AutomotiveBattery_02;
