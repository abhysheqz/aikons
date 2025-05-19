import React from "react";
const CircleArrowDownDouble: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.45 7.4l-.9 1.2L12 11.938 16.45 8.6l-.9-1.2L12 10.062zm0 5-.9 1.2L12 16.938l4.45-3.338-.9-1.2L12 15.062z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDownDouble;
