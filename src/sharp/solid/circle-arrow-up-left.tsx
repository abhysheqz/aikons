import React from "react";
const CircleArrowUpLeft: React.FC<
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
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75 22.75 17.937 22.75 12m-8.64-2.14h-3.189l4.72 4.719-1.061 1.06-4.72-4.719v3.19h-1.5V8.36h5.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUpLeft;
