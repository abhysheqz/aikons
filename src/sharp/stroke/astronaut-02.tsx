import React from "react";
const Astronaut_02: React.FC<
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
      <circle cx={12} cy={10} r={7} stroke="currentColor" strokeWidth={1.5} />
      <ellipse
        cx={12}
        cy={10}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={4}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.5 7h.5a3 3 0 0 1 0 6h-.5M5.502 13h-.5a3 3 0 0 1 0-6h.5M20.5 7V2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 17H9c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122C5 19.605 5 20.07 5 21h14c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C16.396 17 15.93 17 15 17Z"
      />
    </svg>
  );
};
export default Astronaut_02;
