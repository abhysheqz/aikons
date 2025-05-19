import React from "react";
const VrGlasses: React.FC<
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
        d="M5.47 4.47A.75.75 0 0 1 6 4.25h12a.75.75 0 0 1 .53.22l3.78 3.78H1.69z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 9.75h21.5V19a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.53-.22L12 17.06l-2.47 2.47a.75.75 0 0 1-.53.22H2a.75.75 0 0 1-.75-.75zm3.75 4h3v-1.5H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VrGlasses;
