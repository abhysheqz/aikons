import React from "react";
const ChartUp: React.FC<
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
        d="M16.75 10.5c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75zM9.75 14c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75zM2.75 16.5c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75zM15.25 2.75a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.562a26 26 0 0 1-2.223 1.807c-2.393 1.746-6.11 3.92-11.46 5.704a1 1 0 0 1-.633-1.898C9.083 9.085 12.616 7.01 14.848 5.38a24 24 0 0 0 2.01-1.63h-.608a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default ChartUp;
