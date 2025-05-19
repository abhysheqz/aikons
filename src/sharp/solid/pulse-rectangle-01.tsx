import React from "react";
const PulseRectangle_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm10.622 5h-1.708l-1.231 4.927L9.54 8.75H7.992l-1 2.5H4.75v1.5h3.258l.7-1.752L9.96 14.75h1.627l1.095-4.382 1.197 6.382h1.642l1.5-4h2.23v-1.5h-3.27l-1.072 2.858z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PulseRectangle_01;
