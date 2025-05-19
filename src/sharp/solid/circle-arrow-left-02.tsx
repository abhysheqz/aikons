import React from "react";
const CircleArrowLeft_02: React.FC<
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
        d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m-1 14.28L7.47 12 11 8.468l1.06 1.06-1.72 1.72h6.19v1.5h-6.189l1.72 1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowLeft_02;
