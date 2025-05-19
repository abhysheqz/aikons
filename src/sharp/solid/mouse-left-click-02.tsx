import React from "react";
const MouseLeftClick_02: React.FC<
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
      <path fill="currentColor" d="M2.75 4.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.864 8.663A59 59 0 0 0 4.761 11q-.01.496-.011.999c0 1.732.108 3.423.237 5.05.22 2.794 2.407 5.157 5.24 5.509.894.11 1.822.191 2.773.191.95 0 1.879-.08 2.773-.191 2.833-.352 5.02-2.715 5.24-5.508.129-1.628.237-3.32.237-5.051q0-.502-.012-1a72 72 0 0 0-.225-4.05c-.22-2.794-2.407-5.157-5.24-5.509A23 23 0 0 0 13 1.25c-.95 0-1.879.08-2.773.191a6 6 0 0 0-.835.166c.386.53.66 1.15.783 1.82q.142-.028.289-.046A24 24 0 0 1 12 3.235v6.81H6.734q.031-.714.077-1.42a4.5 4.5 0 0 1-1.947.038M14 10.045v-6.81c.51.03 1.022.082 1.535.146 1.906.236 3.394 1.842 3.543 3.723.076.973.145 1.953.187 2.941z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_02;
