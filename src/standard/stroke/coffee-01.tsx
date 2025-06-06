import React from "react";
const Coffee_01: React.FC<
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
        d="m19 7-1.769 13.264A2 2 0 0 1 15.25 22H8.751a2 2 0 0 1-1.982-1.736L5 7M19 7l-.848-2.967c-.1-.349-.285-.674-.589-.87-2.498-1.622-8.752-1.479-11.122.003-.307.192-.494.518-.593.867L5 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7h16"
      />
      <ellipse
        cx={12}
        cy={14.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={2}
        ry={2.5}
      />
    </svg>
  );
};
export default Coffee_01;
