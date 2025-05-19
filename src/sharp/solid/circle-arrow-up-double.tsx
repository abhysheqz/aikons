import React from "react";
const CircleArrowUpDouble: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.45 9.15L12 7.062 7.55 10.4l.9 1.2L12 8.938l3.55 2.662zm0 5L12 12.062 7.55 15.4l.9 1.2L12 13.937l3.55 2.663z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUpDouble;
