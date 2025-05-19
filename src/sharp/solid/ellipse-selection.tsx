import React from "react";
const EllipseSelection: React.FC<
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
        d="M9.47 1.47a.75.75 0 0 1 .53-.22l4 .003a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-.75.75h-4A.75.75 0 0 1 9.25 6V2c0-.199.08-.39.22-.53M1.47 9.47A.75.75 0 0 1 2 9.25l4 .003a.75.75 0 0 1 .75.75V14a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-4c0-.199.08-.39.22-.53M17.47 9.47a.75.75 0 0 1 .53-.22l4 .003a.75.75 0 0 1 .75.75V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4c0-.199.08-.39.22-.53M9.47 17.47a.75.75 0 0 1 .53-.22l4 .003a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4c0-.199.08-.39.22-.53"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.249 5.22a7.01 7.01 0 0 0-5.029 5.03l-1.937-.5A9.01 9.01 0 0 1 9.75 3.285zm8.53 5.03a7.01 7.01 0 0 0-5.029-5.03l.499-1.936a9.01 9.01 0 0 1 6.467 6.467zM5.22 13.75a7.01 7.01 0 0 0 5.029 5.03l-.499 1.936a9.01 9.01 0 0 1-6.467-6.467zm8.53 5.03a7.01 7.01 0 0 0 5.03-5.03l1.936.5a9.01 9.01 0 0 1-6.467 6.467z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EllipseSelection;
