import React from "react";
const Bicycle: React.FC<
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
        d="M5.5 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0M18.5 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.813 6.6a1 1 0 0 1 .373 1.364l-4.577 8.026a2 2 0 0 1-1.738 1.012H5.5a1 1 0 1 1 0-2h4.37l4.579-8.028a1 1 0 0 1 1.364-.374"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 7a1 1 0 0 1 1-1h4a1 1 0 0 1 .128 1.992l3.64 4.368a1 1 0 1 1-1.536 1.28L6.032 8H4.5a1 1 0 0 1-1-1M13.883 3.525C14.316 3.05 14.933 3 15.294 3c.89 0 1.968.052 2.921.435 1.018.41 1.872 1.189 2.247 2.516a1 1 0 1 1-1.925.543c-.188-.667-.56-1-1.068-1.203-.491-.197-1.11-.27-1.821-.287l3.819 10.659a1 1 0 0 1-1.883.674L13.609 5.244l-.026-.084c-.116-.443-.18-1.11.3-1.635"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bicycle;
