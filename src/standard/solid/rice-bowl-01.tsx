import React from "react";
const RiceBowl_01: React.FC<
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
        d="M1.466 11.473A.75.75 0 0 1 2 11.25h18a.75.75 0 0 1 .75.76c-.06 4.347-3.096 6.511-4.82 7.386l.355 1.035a1.75 1.75 0 0 1-1.655 2.319H7.38a1.75 1.75 0 0 1-1.657-2.31l.351-1.042C4.35 18.524 1.311 16.36 1.25 12.01a.75.75 0 0 1 .216-.537"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.177 4.963c1.971.108 3.47 1.956 3.3 3.873 1.16.556 2.023 1.729 2.023 3.164a1 1 0 1 1-2 0c0-1.07-1.16-1.805-2.097-1.392a1 1 0 1 1-.806-1.831q.443-.194.893-.255c-.005-.906-.877-1.735-1.813-1.528a1 1 0 0 1-1.2-.802c-.232-1.305-1.884-1.538-2.624-.7.368.23.69.529.949.875a1 1 0 1 1-1.603 1.196 1.5 1.5 0 0 0-.876-.57C7.208 6.748 6.148 8.007 6.63 9.095a1 1 0 0 1-.801 1.398A1.51 1.51 0 0 0 4.5 12a1 1 0 1 1-2 0c0-1.407.824-2.626 2.018-3.187-.165-1.931 1.377-3.726 3.303-3.846 1.183-2.621 5.17-2.623 6.356-.004"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.64 2.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 1 1-1.536-1.28l5-6a1 1 0 0 1 1.408-.128M18.53 1.152a1 1 0 0 1 .318 1.378l-2.5 4a1 1 0 0 1-1.696-1.06l2.5-4a1 1 0 0 1 1.378-.318"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RiceBowl_01;
