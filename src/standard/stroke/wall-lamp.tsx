import React from "react";
const WallLamp: React.FC<
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
        d="m4 18 6.644 2.81c1.327.613 2.856-.33 2.856-1.761V8M4 14v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 8 2.353 7.999a.93.93 0 0 0 .648.646c.566.147 1.532.355 2.499.355s1.934-.208 2.499-.355a.93.93 0 0 0 .648-.646L19 8M8 8v-.5c0-.276.23-.518.467-.66.882-.528 2.102-2.245 2.733-3.301A1.08 1.08 0 0 1 12.118 3h2.764c.379 0 .724.214.918.539.631 1.056 1.85 2.773 2.733 3.301.237.142.467.384.467.66V8M7 8h13M13.5 3V2"
      />
    </svg>
  );
};
export default WallLamp;
