import React from "react";
const GolfBall: React.FC<
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
        d="M4.25 9a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0m4.503-1.994c0-.69.557-1.25 1.244-1.25h.012c.687 0 1.244.56 1.244 1.25s-.557 1.25-1.244 1.25h-.012c-.687 0-1.244-.56-1.244-1.25M9 17a1 1 0 1 0 0 2c.775 0 2 .824 2 3a1 1 0 1 0 2 0c0-2.176 1.225-3 2-3a1 1 0 1 0 0-2c-1.2 0-2.27.611-3 1.63C11.27 17.61 10.2 17 9 17"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GolfBall;
