import React from "react";
const TestTube_02: React.FC<
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
        d="M6 2a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 1a1 1 0 0 1 1 1v5.001a3.1 3.1 0 0 1 .982.138c.84.247 1.743.814 2.558 1.337.934.6 1.506.567 1.807.466.278-.094.504-.305.653-.56V2a1 1 0 1 1 2 0v16a5 5 0 0 1-10 0V2a1 1 0 0 1 1-1m3.975 16.74a1 1 0 0 1-.707 1.225l-.009.003a1 1 0 1 1-.518-1.932l.01-.003a1 1 0 0 1 1.224.707m1.293-2.775a1 1 0 1 0-.518-1.932l-.009.003a1 1 0 1 0 .518 1.931z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_02;
