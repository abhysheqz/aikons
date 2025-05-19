import React from "react";
const Parabola_01: React.FC<
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
        d="M6.494 12.592C8.026 15.146 10.004 16.5 12 16.5s3.974-1.354 5.506-3.908C19.028 10.058 20 6.492 20 2.5h2c0 4.292-1.042 8.227-2.779 11.121C17.498 16.496 14.975 18.5 12 18.5s-5.497-2.004-7.221-4.879C3.042 10.726 2 6.792 2 2.5h2c0 3.992.973 7.558 2.494 10.092M5 21.5H3v-2h2zm4 0H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Parabola_01;
