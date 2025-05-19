import React from "react";
const HandPointingRight_01: React.FC<
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
        d="M2.024 8.95h2.042l5.85-4.454q.181-.135.385-.23a1.9 1.9 0 0 1 .456-.163c.071-.014.113-.014.286-.014.261 0 .479.023.752.145.135.06.301.193.396.266.38.29.587.79.603 1.304.016.51-.232.87-.604 1.22-.73.686-1.363 1.254-2.196 2.072h9.941c.529-.002 1.155.099 1.503.465.757.861.763 1.639.008 2.549-.349.383-.895.47-1.437.472h-5.53c.166 2.587-.842 5.248-2.128 6.54-.871.985-1.77 1.087-3.223.869-1.678-.298-2.693-.85-5.049-2.003H2.077"
      />
    </svg>
  );
};
export default HandPointingRight_01;
