import React from "react";
const GeometricShapes_02: React.FC<
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
        d="M1.25 6.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M12.25 18.93v2.82h10.5v-10.5h-2.818z"
      />
      <path
        fill="currentColor"
        d="M5.25 13.134 5.248 22a.75.75 0 0 0 1.28.53l16.002-16A.75.75 0 0 0 22 5.25h-8.865q.114.609.115 1.25a6.75 6.75 0 0 1-8 6.634"
      />
    </svg>
  );
};
export default GeometricShapes_02;
