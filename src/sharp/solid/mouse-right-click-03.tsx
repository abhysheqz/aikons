import React from "react";
const MouseRightClick_03: React.FC<
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
        d="M14.773 1.441A23 23 0 0 0 12 1.251c-.95 0-1.879.08-2.773.19-2.833.352-5.02 2.715-5.24 5.509-.129 1.627-.237 3.319-.237 5.05 0 1.732.108 3.423.237 5.05.22 2.794 2.407 5.157 5.24 5.509.894.11 1.822.191 2.773.191.95 0 1.879-.08 2.773-.191 2.833-.352 5.02-2.715 5.24-5.508.129-1.628.237-3.32.237-5.05 0-1.732-.108-3.424-.236-5.051-.22-2.794-2.408-5.157-5.24-5.509m-.237 1.94a24 24 0 0 0-1.535-.146v5.063l3.506-4.091a4 4 0 0 0-1.97-.826m3.221 2.44a4 4 0 0 1 .322 1.283c.075.958.143 1.923.185 2.896h-4.088zM5.922 7.104A82 82 0 0 0 5.737 10h5.264V3.235q-.766.048-1.536.146C7.56 3.617 6.07 5.223 5.922 7.104"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_03;
