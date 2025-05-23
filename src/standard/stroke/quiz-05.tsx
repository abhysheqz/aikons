import React from "react";
const Quiz_05: React.FC<
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
        d="M10.5 14h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.5 7.5a2 2 0 1 1 3.683 1.08c-.598.93-1.683 1.815-1.683 2.92"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 19.5c1.05.87 2.315 1.424 3.764 1.519 1.141.075 2.333.075 3.473 0 .392-.026.82-.118 1.188-.268.41-.167.614-.25.719-.237.104.012.255.122.557.342.533.388 1.204.666 2.2.643.503-.012.755-.019.867-.208.113-.19-.027-.452-.308-.977-.39-.728-.636-1.561-.262-2.229.643-.954 1.19-2.083 1.27-3.303.043-.655.043-1.334 0-1.99A6.7 6.7 0 0 0 20.9 10.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.237 17.019a6.685 6.685 0 0 0 6.23-6.237c.044-.655.044-1.334 0-1.99a6.685 6.685 0 0 0-6.23-6.236 27 27 0 0 0-3.473 0 6.686 6.686 0 0 0-6.232 6.237 15 15 0 0 0 0 1.99c.08 1.22.627 2.349 1.27 3.302.374.668.127 1.501-.262 2.23-.28.524-.42.786-.308.976.113.19.364.195.868.208.995.024 1.666-.255 2.199-.643.302-.22.453-.33.557-.342s.31.07.72.237c.368.15.795.242 1.188.268 1.139.075 2.33.075 3.473 0Z"
      />
    </svg>
  );
};
export default Quiz_05;
