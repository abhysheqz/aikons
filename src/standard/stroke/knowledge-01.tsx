import React from "react";
const Knowledge_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.5c0-3.471 2.976-2.976 2.976-2.976S15.47 5.5 12 5.5M18.527 21.5H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h13.48m.047 6h2.442m-2.442 0-.046-6m2.519 0h-2.52"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 9.25c0 2.071 1.222 6.25 4.278 6.25.458 0 .866-.214 1.222-.57.356.356.764.57 1.222.57 3.056 0 4.278-4.179 4.278-6.25S15.858 5.5 13.833 5.5c-.668 0-1.294.183-1.833.502a3.6 3.6 0 0 0-1.833-.502C8.142 5.5 6.5 7.179 6.5 9.25Z"
      />
    </svg>
  );
};
export default Knowledge_01;
