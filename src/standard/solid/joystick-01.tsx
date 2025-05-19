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
        fill="currentColor"
        fillRule="evenodd"
        d="M14.67 11h.83a1 1 0 1 1 0 2H13v4.25h1.764a2.75 2.75 0 0 1 2.46 1.52l.724 1.447a1.75 1.75 0 0 1-1.566 2.533H7.618a1.75 1.75 0 0 1-1.565-2.533l.724-1.447a2.75 2.75 0 0 1 2.46-1.52H11V13H8.5a1 1 0 1 1 0-2h.852c.592-4.165-.58-6.78-1.017-7.652l-.006-.013a.75.75 0 0 1 0-.67l.001-.002v-.002l.003-.003.004-.01.012-.02.034-.06a2.669 2.669 0 0 1 .586-.653c.436-.35 1.099-.665 2.031-.665 2.51 0 3.355 2.116 3.68 2.931l.016.04a.75.75 0 0 1-.072.695L13.901 6l.723 1.084a.75.75 0 0 1 0 .832l-.702 1.053c.302.471.608 1.162.749 2.031"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Joystick_01;
