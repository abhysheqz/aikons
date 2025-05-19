import React from "react";
const Joystick_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 21.956H6l2-3.991h8zM8.5 12h7M12 11.979v5.986"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.055 12.014c.415-3.853.335-7.24-1.123-8.98.634-.913 1.028-1.308 2.949-.95 1.777.764 2.125 2.384 2.125 2.384l-.964 1.48a.1.1 0 0 0 0 .109l.964 1.467-.962 1.44a.1.1 0 0 0 .001.113c.852 1.248.938 2.286.938 2.937"
      />
    </svg>
  );
};
export default Joystick_01;
