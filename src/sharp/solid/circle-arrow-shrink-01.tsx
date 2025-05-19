import React from "react";
const CircleArrowShrink_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M6.47 7.53l2.22 2.22H6.5v1.5h4.75V6.5h-1.5v2.19L7.53 6.47zm11.03 5.22h-4.75v4.75h1.5v-2.19l2.22 2.22 1.06-1.06-2.22-2.22h2.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowShrink_01;
