import React from "react";
const FingerprintScan: React.FC<
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
        d="M4.679 1.75A2.93 2.93 0 0 0 1.75 4.679V9.07a.976.976 0 0 0 1.952 0V4.68c0-.54.437-.977.977-.977H9.07a.976.976 0 0 0 0-1.952zm10.25 0a.976.976 0 1 0 0 1.952h4.392c.54 0 .977.437.977.977V9.07a.976.976 0 0 0 1.952 0V4.68a2.93 2.93 0 0 0-2.929-2.929zM3.702 14.929a.976.976 0 1 0-1.952 0v4.392a2.93 2.93 0 0 0 2.929 2.929H9.07a.976.976 0 0 0 0-1.952H4.68a.976.976 0 0 1-.977-.977zm18.548 0a.976.976 0 1 0-1.952 0v4.392c0 .54-.437.977-.977.977H14.93a.976.976 0 1 0 0 1.952h4.392a2.93 2.93 0 0 0 2.929-2.929zM6.5 11a5.5 5.5 0 1 1 11 0v4.5a1 1 0 1 1-2 0V11a3.5 3.5 0 1 0-7 0v4.5a1 1 0 1 1-2 0zm3 0a2.5 2.5 0 0 1 5 0v1.5a1 1 0 1 1-2 0V11a.5.5 0 0 0-1 0v5.5a1 1 0 1 1-2 0zm4 3.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FingerprintScan;
