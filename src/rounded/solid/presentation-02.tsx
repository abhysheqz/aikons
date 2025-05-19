import React from "react";
const Presentation_02: React.FC<
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
        d="M2.25 17.5h19.5V7.6c0-3.111 0-4.667-.952-5.634C19.846 1 18.314 1 15.25 1h-6.5c-3.064 0-4.596 0-5.548.966C2.25 2.933 2.25 4.49 2.25 7.6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 17a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 22v-5h2v5a1 1 0 1 1-2 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.486 18.143a1 1 0 0 1 1.029 0l5 3a1 1 0 1 1-1.03 1.715L12 20.166l-4.485 2.692a1 1 0 0 1-1.03-1.716z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Presentation_02;
