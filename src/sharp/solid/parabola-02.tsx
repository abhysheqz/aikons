import React from "react";
const Parabola_02: React.FC<
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
        d="M6.494 12.592C8.026 15.146 10.004 16.5 12 16.5s3.974-1.354 5.506-3.908C19.028 10.058 20 6.492 20 2.5h2c0 4.292-1.042 8.227-2.779 11.121-1.724 2.875-4.246 4.88-7.221 4.88s-5.497-2.005-7.221-4.88C3.042 10.727 2 6.792 2 2.501h2c0 3.991.973 7.557 2.494 10.091M5 21.5H3v-2h2zm4 0H7v-2h2zm8 0h-2v-2h2zm4 0h-2v-2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 1.5 3.707 3.707-1.414 1.414L13 5.328V22.5h-2V5.328L9.707 6.621 8.293 5.207z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Parabola_02;
