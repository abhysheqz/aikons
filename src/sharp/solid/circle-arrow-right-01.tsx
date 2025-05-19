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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-1.78 6.375L13.72 12l-3.5 4.375 1.56 1.25 4-5 .5-.625-.5-.625-4-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowRight_01;
