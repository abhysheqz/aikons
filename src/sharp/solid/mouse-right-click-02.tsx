import React from "react";
const MouseRightClick_02: React.FC<
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
      <path fill="currentColor" d="M21.25 4.25a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.136 8.663c.048.768.085 1.548.102 2.338q.012.496.012.999c0 1.732-.108 3.423-.237 5.05-.22 2.794-2.407 5.157-5.24 5.509-.894.11-1.822.191-2.773.191-.95 0-1.879-.08-2.773-.191-2.833-.352-5.02-2.715-5.24-5.508-.129-1.628-.237-3.32-.237-5.051q0-.502.011-1c.032-1.382.122-2.737.226-4.05.22-2.794 2.407-5.157 5.24-5.509A23 23 0 0 1 11 1.25c.95 0 1.879.08 2.773.191q.428.054.835.166a4.5 4.5 0 0 0-.783 1.82 4 4 0 0 0-.289-.046A24 24 0 0 0 12 3.235v6.81h5.266q-.031-.714-.077-1.42a4.5 4.5 0 0 0 1.947.038M10 10.045v-6.81c-.51.03-1.022.082-1.535.146-1.906.236-3.394 1.842-3.543 3.723a81 81 0 0 0-.187 2.941z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_02;
