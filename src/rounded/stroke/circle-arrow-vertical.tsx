import React from "react";
const CircleArrowVertical: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17V7m0 10c.56 0 1.607-1.396 2-1.75M12 17c-.56 0-1.607-1.396-2-1.75M12 7c.56 0 1.607 1.396 2 1.75M12 7c-.56 0-1.607 1.396-2 1.75"
      />
    </svg>
  );
};
export default CircleArrowVertical;
