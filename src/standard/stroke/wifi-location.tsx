import React from "react";
const WifiLocation: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2c4.87 0 9 4.033 9 8.926 0 4.97-5.124 8.702-9 11.074-3.87-2.395-9-6.086-9-11.074C3 6.033 7.13 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9.478C9.149 8.543 10.52 8 11.995 8c1.478 0 2.854.547 4.005 1.487M14.174 12a4.1 4.1 0 0 0-2.18-.64c-.779 0-1.516.229-2.17.634"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15h.006"
      />
    </svg>
  );
};
export default WifiLocation;
