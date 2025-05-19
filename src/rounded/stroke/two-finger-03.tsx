import React from "react";
const TwoFinger_03: React.FC<
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
        d="M11.5 6a1.5 1.5 0 0 0-3 0v7.962l-1.62-1.625a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l3.004 4.018c.682.912 1.023 1.367 1.433 1.722.626.54 1.376.917 2.183 1.094.528.117 1.096.117 2.233.117 2.166 0 3.25 0 4.112-.332a5 5 0 0 0 2.867-2.876c.331-.865.331-1.952.331-4.125V11.5a2 2 0 0 0-2-2 1 1 0 0 0-1 1m-6-4.5V4a1.5 1.5 0 0 1 3 0v5m-3-3v4.5m3-1.5v1.5m0-1.5.578-.289c.277-.139.588-.228.89-.156A2 2 0 0 1 17.5 10.5m0 0v1"
      />
    </svg>
  );
};
export default TwoFinger_03;
