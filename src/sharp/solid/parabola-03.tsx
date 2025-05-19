import React from "react";
const Parabola_03: React.FC<
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
        d="m12 1.5 3.707 3.707-1.414 1.414L13 5.328V22.5h-2V5.328L9.707 6.621 8.293 5.207z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 21.5H2v-2h20zM6.494 12.593C8.026 15.147 10.004 16.5 12 16.5s3.974-1.353 5.506-3.908C19.028 10.058 20 6.493 20 2.5h2c0 4.293-1.042 8.227-2.779 11.122C17.498 16.496 14.975 18.5 12 18.5s-5.497-2.004-7.221-4.879C3.042 10.728 2 6.793 2 2.502h2c0 3.991.973 7.557 2.494 10.092"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Parabola_03;
