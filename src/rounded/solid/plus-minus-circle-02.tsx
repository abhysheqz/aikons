import React from "react";
const PlusMinusCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.707 6.043a1 1 0 0 0-1.414 0l-8 8a1 1 0 1 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414M9.5 8a1 1 0 0 0-2 0v.5H7a1 1 0 0 0 0 2h.5v.5a1 1 0 1 0 2 0v-.5h.5a1 1 0 1 0 0-2h-.5zm7.5 5.5h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinusCircle_02;
