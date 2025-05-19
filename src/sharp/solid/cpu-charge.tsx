import React from "react";
const CpuCharge: React.FC<
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
        d="M8.5 4.5V2h2v2.5zm5 0V2h2v2.5zM2 8.5h2.5v2H2zm17.5 0H22v2h-2.5zM2 13.5h2.5v2H2zm17.5 0H22v2h-2.5zM8.5 22v-2.5h2V22zm5 0v-2.5h2V22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 3.75a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75zm8.395 4.697L11.62 11h4l-2.724 5.447-1.789-.894L12.383 13h-4l2.723-5.447z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CpuCharge;
