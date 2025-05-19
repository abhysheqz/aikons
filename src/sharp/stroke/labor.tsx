import React from "react";
const Labor: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 22v-5.5L14.5 15H14l-2 2-2-2h-.5L4 16.5V22M16 16v6M8 16v6M15.5 9V7a3.5 3.5 0 1 0-7 0v2a3.5 3.5 0 1 0 7 0ZM7.5 7.5h9M12 2v1.5"
      />
    </svg>
  );
};
export default Labor;
