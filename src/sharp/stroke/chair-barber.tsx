import React from "react";
const ChairBarber: React.FC<
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
        d="M17.997 15.502H6.042l.001-2.996h11.954z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.009 8.507H9.032l.002 3.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.038 12.48v6.933a.1.1 0 0 1-.1.1h-2.94"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.02 15.503v5.996m-2.988 0h5.977"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.006 12.523 2.971-9.95a.1.1 0 0 1 .096-.071H21l-3.01 10.021"
      />
    </svg>
  );
};
export default ChairBarber;
