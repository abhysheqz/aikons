import React from "react";
const IceSkating: React.FC<
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
        d="M3.495 13.5H7.5L12 17h7c1.546 0 2-1.106 2-2.526 0-1.554-4.088-2.323-6.04-4.055s-3.02-5.725-3.185-7.314c-1.493-.272-5.003-.183-7.123 2.343.148.819-.14 1.989-.616 2.77-.596.979-1.582 2.813-.658 4.993q.063.147.117.289Zm0 0c.39 1.027.515 2.825.505 3.5h4l.5-2.722"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 9-2 2M12.5 7 10 8M20.03 17 22 21H2M15 17v4m-9-4v4"
      />
    </svg>
  );
};
export default IceSkating;
