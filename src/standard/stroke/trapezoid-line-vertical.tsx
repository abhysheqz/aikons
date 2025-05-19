import React from "react";
const TrapezoidLineVertical: React.FC<
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
        d="M16.694 19a2 2 0 0 0 1.98-2.283L17.245 6.72a2 2 0 0 0-1.98-1.717L7.736 5a2 2 0 0 0-1.98 1.718l-1.429 10A2 2 0 0 0 6.306 19zM11.5 22V2"
      />
    </svg>
  );
};
export default TrapezoidLineVertical;
