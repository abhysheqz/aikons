import React from "react";
const OlympicTorch: React.FC<
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
        strokeWidth={1.5}
        d="M10 8.946c.011-1.226.52-2.625 1.657-3.573C14.508 2.993 18.995 6 20.815 2c3.658 5.641-2.32 5-2.32 7.5 0 1.197 1.5 1.5 2.868 1.103-.244.85-1.868 4.203-6.366 3.218"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.954 12.028C7.831 10.904 8.01 7 8.01 7L17 15.99s-3.904.178-5.028-.946M8.148 12 2 20.5 3.5 22l8.5-6.148M6 9l9 9"
      />
    </svg>
  );
};
export default OlympicTorch;
