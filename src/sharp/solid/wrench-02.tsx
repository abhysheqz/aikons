import React from "react";
const Wrench_02: React.FC<
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
        d="m14.25 1.603-1-.353v5.72a1.25 1.25 0 1 1-2.5 0V1.25l-1 .353a6.752 6.752 0 0 0-1.5 11.98V22c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-8.418a6.752 6.752 0 0 0-1.5-11.979M12.992 18h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wrench_02;
