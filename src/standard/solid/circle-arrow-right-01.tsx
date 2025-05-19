import React from "react";
const CircleArrowRight_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.747 6.092a1 1 0 1 0-1.506 1.317L12.671 12l-2.924 3.342a1 1 0 1 0 1.506 1.316l3.5-4a1 1 0 0 0 0-1.316z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowRight_01;
