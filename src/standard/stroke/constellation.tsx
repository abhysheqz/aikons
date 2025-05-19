import React from "react";
const Constellation: React.FC<
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
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14.5 6l-2 4m.5-5.5-7 3m6 6.5-1 4m3-5 4 2m0 2-5 2.5"
      />
    </svg>
  );
};
export default Constellation;
