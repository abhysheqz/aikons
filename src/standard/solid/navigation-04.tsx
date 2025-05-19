import React from "react";
const Navigation_04: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.621 7.302a.95.95 0 0 0-1.174-1.174L7.334 9.696c-.86.245-.935 1.434-.114 1.786l3.708 1.589 1.59 3.707c.351.822 1.54.747 1.786-.113z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigation_04;
