import React from "react";
const CircleArrowShrink_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.47 5.22-2.22 2.22V6.5h-1.5v4.75h4.75v-1.5h-2.19l2.22-2.22zm-5.22 6.28H6.5v1.5h2.19l-2.22 2.22 1.06 1.06 2.22-2.22v2.19h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowShrink_02;
