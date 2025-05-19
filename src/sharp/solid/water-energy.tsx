import React from "react";
const WaterEnergy: React.FC<
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
        d="M12 3.5a8.5 8.5 0 0 0-1.89.21l-.442-1.95c.75-.17 1.532-.26 2.332-.26 5.799 0 10.5 4.701 10.5 10.5 0 2.65-.982 5.07-2.6 6.917h1.6v2h-5.247V16h2v1.758A8.5 8.5 0 0 0 12 3.5M7.722 8h-2V6.27a8.5 8.5 0 0 0 8.168 14.02l.442 1.95c-.75.17-1.532.26-2.332.26-5.799 0-10.5-4.701-10.5-10.5 0-2.642.976-5.056 2.586-6.9H2.5v-2h5.222z"
      />
      <path
        fill="currentColor"
        d="M12 5.683c.104.094 1.072.94 1.245 1.11.347.337.81.817 1.277 1.384.464.563.948 1.233 1.319 1.949.367.707.659 1.527.659 2.374a4.5 4.5 0 1 1-9 0c0-.847.292-1.667.66-2.374.37-.716.854-1.386 1.318-1.95.467-.566.93-1.046 1.277-1.384.173-.17 1.141-1.015 1.245-1.11"
      />
    </svg>
  );
};
export default WaterEnergy;
