import React from "react";
const MinusPlusCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.707 7.457a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 1 0 1.414 1.414zM7 9.5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1m9 3.5a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlusCircle_02;
