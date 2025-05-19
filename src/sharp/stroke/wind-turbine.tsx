import React from "react";
const WindTurbine: React.FC<
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
        strokeWidth={1.5}
        d="M13.5 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21 10.5a9.176 9.176 0 0 0-3.928-7m-10.144 0A9.18 9.18 0 0 0 3 10.5M12 9.5V7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 7h3l.5-5h-4zM16.48 11.933 15 14.516l4.026 2.917L21 13.988zM7.52 11.944 9 14.528l-4.026 2.916L3 14z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.7 11.75 8.535 13M13.3 11.75 15.465 13M12 12.5V22M18 22H6"
      />
    </svg>
  );
};
export default WindTurbine;
