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
        fillRule="evenodd"
        d="M6 1.25h12A3.75 3.75 0 0 1 21.75 5v12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V5A3.75 3.75 0 0 1 6 1.25"
        clipRule="evenodd"
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
        d="M12 16a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1"
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
