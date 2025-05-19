import React from "react";
const Gravity: React.FC<
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
        d="M12 21.986c3.314 0 6-2.684 6-5.996a6 6 0 0 0-6-5.996c-3.314 0-6 2.685-6 5.996a6 6 0 0 0 6 5.996ZM7 2v1.999M17 2v1.999M12.01 1.99v4.841M14.503 5 12.01 7.496 9.5 4.995"
      />
    </svg>
  );
};
export default Gravity;
