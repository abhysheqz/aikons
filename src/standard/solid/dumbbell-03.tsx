import React from "react";
const Dumbbell_03: React.FC<
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
        d="M7.5 3.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0V8h9v2.5a1 1 0 1 0 2 0v-7a1 1 0 1 0-2 0V6h-9zm0 10a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V18h9v2.5a1 1 0 1 0 2 0v-7a1 1 0 1 0-2 0V16h-9zM1.5 7a1 1 0 0 1 1-1H3V5a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V8h-.5a1 1 0 0 1-1-1M20 4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8h.5a1 1 0 1 0 0-2H21V5a1 1 0 0 0-1-1M2.5 16a1 1 0 1 0 0 2H3v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1zM19 17v-2a1 1 0 1 1 2 0v1h.5a1 1 0 1 1 0 2H21v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dumbbell_03;
