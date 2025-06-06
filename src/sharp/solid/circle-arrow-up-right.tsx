import React from "react";
const CircleArrowUpRight: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.64-2.14h3.189l-4.72 4.719 1.061 1.06 4.72-4.719v3.19h1.5V8.36H9.89z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUpRight;
