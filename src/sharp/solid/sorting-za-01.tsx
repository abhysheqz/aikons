import React from "react";
const SortingZa_01: React.FC<
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
        d="M7.723 4H3.941V2h6.5v1.862L6.16 9H9.94v2h-6.5V9.138zM5.737 13.664h2.409l2.737 7.663L9 22 6.94 16.237 4.883 22 3 21.327zM18.293 4v12.172l1.293-1.293L21 16.293 17.293 20l-3.707-3.707L15 14.879l1.293 1.293V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingZa_01;
