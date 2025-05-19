import React from "react";
const Previous: React.FC<
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
        d="m12.145 6.892-.089.057c-1.317.846-2.363 1.52-3.106 2.135-.757.626-1.315 1.283-1.494 2.136a3.8 3.8 0 0 0 0 1.56c.179.853.737 1.51 1.494 2.136.743.616 1.79 1.288 3.106 2.135l.09.057c1.433.922 2.568 1.652 3.495 2.1.932.45 1.818.7 2.693.432a3.5 3.5 0 0 0 1.383-.807c.661-.623.917-1.518 1.038-2.576.12-1.054.12-2.443.12-4.206v-.102c0-1.763 0-3.152-.12-4.206-.12-1.058-.377-1.953-1.038-2.576a3.5 3.5 0 0 0-1.383-.807c-.875-.268-1.761-.018-2.693.433-.927.447-2.062 1.177-3.496 2.099M4.125 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Previous;
