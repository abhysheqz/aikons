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
        d="m16.91 3.054-.727-.73a1.07 1.07 0 0 0-1.554.025l-2.321 2.583 2.139 2.138 2.476-2.49a1.083 1.083 0 0 0-.013-1.526M13.389 8.133 11.304 6.05 1.771 16.661a1.085 1.085 0 0 0 .05 1.487l.037.038a1.07 1.07 0 0 0 1.518.013zM16.395 10.053l2.084 2.085-10.562 9.59a1.07 1.07 0 0 1-1.48-.05l-.038-.038a1.083 1.083 0 0 1-.013-1.526zM19.59 11.128 17.453 8.99l2.481-2.495a1.07 1.07 0 0 1 1.519.014l.726.73c.438.44.427 1.153-.025 1.563z"
      />
    </svg>
  );
};
export default Chopsticks;
