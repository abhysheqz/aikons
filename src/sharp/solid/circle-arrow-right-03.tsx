import React from "react";
const CircleArrowRight_03: React.FC<
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
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75 22.75 17.937 22.75 12m-6.875-4h1.5v8h-1.5zm-5.78 1.53 1.06-1.06 3.53 3.53-3.53 3.53-1.06-1.06 1.72-1.72h-5.19v-1.5h5.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowRight_03;
