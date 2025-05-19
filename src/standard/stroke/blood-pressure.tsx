import React from "react";
const BloodPressure: React.FC<
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
        d="M9 13h2l2 4 2-6 2.5 4H20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.504 12c-.962-4.843-6.276-8.619-7.933-9.692a.9.9 0 0 0-.984-.002C9.767 3.484 3.5 7.944 3.5 13.5c0 4.694 3.84 8.5 8.577 8.5a8.59 8.59 0 0 0 7.278-4"
      />
    </svg>
  );
};
export default BloodPressure;
