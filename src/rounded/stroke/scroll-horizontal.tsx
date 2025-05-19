import React from "react";
const ScrollHorizontal: React.FC<
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
        d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2 12.067c-.04-1.38 5.345-4.628 5.852-3.983.575.73-.8 2.902-1.11 3.594-.186.416-.181.596.03 1.012.96 1.881 1.436 2.818 1.14 3.224-.471.646-5.872-2.5-5.912-3.847ZM21.999 12.067c.04-1.38-5.344-4.628-5.852-3.983-.575.73.8 2.902 1.11 3.594.186.416.181.596-.03 1.012-.96 1.881-1.436 2.818-1.14 3.224.471.646 5.872-2.5 5.912-3.847Z"
      />
    </svg>
  );
};
export default ScrollHorizontal;
