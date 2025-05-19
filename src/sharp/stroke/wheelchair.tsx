import React from "react";
const Wheelchair: React.FC<
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
        d="M12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM18 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.008 16h-.009"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M6 11 4.5 3H2" />
      <path stroke="currentColor" strokeWidth={1.5} d="M5 7h11.5v11" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 14h6.004L20 17l2-.784"
      />
    </svg>
  );
};
export default Wheelchair;
