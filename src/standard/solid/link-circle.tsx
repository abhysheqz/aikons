import React from "react";
const LinkCircle: React.FC<
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
        d="M12 4a8 8 0 1 0 8 8 1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.074 2.617A1 1 0 0 1 16.998 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1.707.707l-1.292-1.292-3.292 3.292a1 1 0 1 1-1.414-1.414l3.291-3.292-1.293-1.294a1 1 0 0 1-.217-1.09"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LinkCircle;
