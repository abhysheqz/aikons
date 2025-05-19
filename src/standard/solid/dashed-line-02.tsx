import React from "react";
const DashedLine_02: React.FC<
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
        d="M4.929 2A2.93 2.93 0 0 0 2 4.929V6.88a.976.976 0 1 0 1.952 0V4.929c0-.54.437-.977.977-.977H6.88a.976.976 0 1 0 0-1.952zm12.69 0a.976.976 0 0 0 0 1.952h1.952c.54 0 .977.437.977.977V6.88a.976.976 0 0 0 1.952 0V4.929A2.93 2.93 0 0 0 19.571 2zM3.952 17.619a.976.976 0 0 0-1.952 0v1.952A2.93 2.93 0 0 0 4.929 22.5H6.88a.976.976 0 0 0 0-1.952H4.929a.976.976 0 0 1-.977-.977zm18.548 0a.976.976 0 0 0-1.952 0v1.952c0 .54-.437.977-.977.977H17.62a.976.976 0 0 0 0 1.952h1.952a2.93 2.93 0 0 0 2.929-2.929zM10.298 2a.976.976 0 0 0 0 1.952h3.904a.976.976 0 0 0 0-1.952zm-6.346 8.298a.976.976 0 0 0-1.952 0v3.904a.976.976 0 0 0 1.952 0zm18.548 0a.976.976 0 0 0-1.952 0v3.904a.976.976 0 0 0 1.952 0zm-12.202 10.25a.976.976 0 0 0 0 1.952h3.904a.976.976 0 0 0 0-1.952z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashedLine_02;
