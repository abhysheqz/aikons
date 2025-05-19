import React from "react";
const Bluetooth: React.FC<
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
        d="M12 12V6.666c0-1.862 0-2.793.585-3.088s1.324.264 2.803 1.38l.705.534c1.036.783 1.553 1.174 1.553 1.707s-.517.925-1.553 1.707zm0 0v5.334c0 1.862 0 2.793.585 3.088s1.324-.264 2.803-1.38l.705-.534c1.036-.783 1.553-1.174 1.553-1.707s-.517-.925-1.553-1.707zm0 0L5.645 7.2M12 12l-6.353 4.8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 12h.009M5 12h.009"
      />
    </svg>
  );
};
export default Bluetooth;
