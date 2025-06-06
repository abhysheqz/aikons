import React from "react";
const SwipeRight_09: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.612 9.685.853-4.924c.141-.816-.394-1.594-1.195-1.738A1.476 1.476 0 0 0 8.563 4.24l-1.706 9.848-.141.763-1.91-2.014a1.613 1.613 0 0 0-2.446.14 1.73 1.73 0 0 0-.031 2.072l4.077 6.067a2 2 0 0 0 1.66.884h7.742a2 2 0 0 0 1.973-1.668l1.196-7.115c.142-.816-.393-1.594-1.195-1.738a1.476 1.476 0 0 0-1.707 1.217m-5.463-3.011-.256 1.477m.256-1.477a1.476 1.476 0 0 1 1.707-1.217c.801.144 1.337.922 1.195 1.738l-.17.984m0 0-.086.493m.086-.493a1.476 1.476 0 0 1 1.707-1.216c.801.143 1.336.922 1.195 1.737l-.17.985m0 0-.086.492M15.5 4.5h5.915M19.5 2 22 4.5 19.5 7"
      />
    </svg>
  );
};
export default SwipeRight_09;
