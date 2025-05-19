import React from "react";
const Lamp_03: React.FC<
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
        d="M12 10v9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 22h8M9 22l.773-2.316A1 1 0 0 1 10.72 19h2.559a1 1 0 0 1 .948.684L15.001 22M15.467 10.004v2.995"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.483 3.19 2.395 5.405A1 1 0 0 1 16.963 10H7.026a1 1 0 0 1-.917-1.4l2.35-5.398A2 2 0 0 1 10.295 2h3.36a2 2 0 0 1 1.83 1.19Z"
      />
    </svg>
  );
};
export default Lamp_03;
