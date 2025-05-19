import React from "react";
const Quran_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path fill="currentColor" d="M12.498 12 21 6l-2.5-3-6 4.5-6.5-4.5-2 3z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.453 18.065v-2.637h1.981v4.594c0 .37-.212.709-.548.875a1 1 0 0 1-1.037-.093L12.5 16.842l-5.35 3.962a1 1 0 0 1-1.036.093.98.98 0 0 1-.548-.875v-4.594h1.981v2.637l3.302-2.445L2 9.065 3.189 7.5l9.311 6.897L21.811 7.5 23 9.065l-8.85 6.555z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_01;
