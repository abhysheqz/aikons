import React from "react";
const CallDisabled_02: React.FC<
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
        d="M20.836 1.75 1.75 20.836l1.414 1.414L22.25 3.164z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.163 12.302A18 18 0 0 1 7 10l3-3-2-4.5H2.5q0 7.731 3.146 12.317zM7.25 16.75l2.458-2.458c1.09 1.09 2.444 1.917 4.292 2.709l3-3 4.5 2v5.5q-9.501 0-14.25-4.75"
      />
    </svg>
  );
};
export default CallDisabled_02;
