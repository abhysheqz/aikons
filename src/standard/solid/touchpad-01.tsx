import React from "react";
const Touchpad_01: React.FC<
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
        d="M1.5 4A2.5 2.5 0 0 1 4 1.5h14.999a2.5 2.5 0 0 1 2.5 2.5v5a1 1 0 1 1-2 0V4a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h2a1 1 0 1 1 0 2H4A2.5 2.5 0 0 1 1.5 16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.75 19.7v1.8a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-1.722L8.268 15.73a2.17 2.17 0 0 1 .205-3.024 2.16 2.16 0 0 1 2.925.038l.362.34V7a2.25 2.25 0 0 1 4.501 0v3.732c.489.045 1.14.138 1.836.321 1.171.309 2.588.905 3.516 2.084.637.809.707 1.837.59 2.67-.14.998-.54 2.025-.885 2.775a16 16 0 0 1-.568 1.118"
      />
    </svg>
  );
};
export default Touchpad_01;
