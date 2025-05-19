import React from "react";
const TextCheck: React.FC<
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
        d="M20.939 11.656a1 1 0 0 1-.594 1.283c-.618.227-1.325.713-2.067 1.387-.73.664-1.439 1.46-2.065 2.239a33 33 0 0 0-2.074 2.9l-.028.045-.007.01-.001.003a1 1 0 0 1-1.79-.172c-.303-.81-.748-1.293-1.094-1.57a4 4 0 0 0-.548-.337 1 1 0 0 1 .646-1.892c.065.027.284.116.386.168.204.104.472.265.766.5.276.22.571.505.853.867.362-.515.816-1.134 1.333-1.776.664-.826 1.445-1.707 2.278-2.465.822-.747 1.753-1.428 2.723-1.784a1 1 0 0 1 1.283.594"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 10a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextCheck;
