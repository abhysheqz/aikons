import React from "react";
const Bicycle_01: React.FC<
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
        d="M5.75 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0M18.25 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.768 6.36a1 1 0 0 0-1.536 1.28l4.947 5.937L10.371 15H6a1 1 0 1 0 0 2h4.37a2 2 0 0 0 1.74-1.011l4.26-7.495a1 1 0 0 0-1.74-.988l-2.395 4.214z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 7a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1M14.383 3.525C14.816 3.05 15.433 3 15.794 3c.89 0 1.968.052 2.921.435 1.018.41 1.872 1.189 2.247 2.516a1 1 0 0 1-1.925.543c-.188-.667-.56-1-1.068-1.203-.5-.2-1.131-.273-1.857-.288l2.88 10.738a1 1 0 1 1-1.933.518L14.083 5.16c-.116-.443-.18-1.11.3-1.635"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bicycle_01;
