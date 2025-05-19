import React from "react";
const Chopsticks: React.FC<
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
        d="M17.526 4.22 15.316 2l-2.851 3.086 2.077 2.082zM13.475 8.223l-2.03-2.035L1.772 16.66a1.085 1.085 0 0 0 .05 1.488l.037.038a1.07 1.07 0 0 0 1.519.013zM16.307 9.964l2.03 2.035-10.42 9.728a1.07 1.07 0 0 1-1.48-.05l-.037-.038a1.084 1.084 0 0 1-.013-1.526zM19.433 10.974l-2.078-2.083 2.935-3.002L22.5 8.11z"
      />
    </svg>
  );
};
export default Chopsticks;
