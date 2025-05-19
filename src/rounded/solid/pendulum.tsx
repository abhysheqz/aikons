import React from "react";
const Pendulum: React.FC<
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
        d="M3.25 18.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        d="M8.25 18.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M16.5 18.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.21 4.25H20a1 1 0 1 0 0-2H2a1 1 0 0 0 0 2h3.5v12a1 1 0 1 0 2 0v-12h3v12a1 1 0 1 0 2 0v-12h3.674l2.344 12.189a1 1 0 1 0 1.964-.378z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pendulum;
