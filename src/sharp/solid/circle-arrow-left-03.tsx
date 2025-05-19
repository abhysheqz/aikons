import React from "react";
const CircleArrowLeft_03: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m6.875-4h-1.5v8h1.5zm5.78 1.53-1.06-1.06L9.315 12l3.53 3.53 1.06-1.06-1.72-1.72h5.19v-1.5h-5.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowLeft_03;
