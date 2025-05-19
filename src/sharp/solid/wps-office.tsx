import React from "react";
const WpsOffice: React.FC<
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
        d="M1.25 4.75h8.214L12 9.823l2.537-5.073h8.213v1.42l-6.278 13.08h-1.436L12 13.177 8.964 19.25H7.528L1.25 6.17z"
      />
    </svg>
  );
};
export default WpsOffice;
