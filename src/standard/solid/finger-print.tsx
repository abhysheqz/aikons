import React from "react";
const FingerPrint: React.FC<
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
        d="M6.867 2.534c4.46-3.03 10.894-1.41 13.262 3.445a1 1 0 1 1-1.798.877c-1.82-3.732-6.86-5.032-10.34-2.667a1 1 0 1 1-1.124-1.655m-1.675 3.01a1 1 0 0 1 .466 1.335A6.6 6.6 0 0 0 5 9.757v4.453c0 2.296 1.174 4.334 2.99 5.568a1 1 0 0 1-1.123 1.655C4.537 19.85 3 17.21 3 14.21V9.757c0-1.34.307-2.61.857-3.748a1 1 0 0 1 1.335-.465M20 9.333a1 1 0 0 1 1 1v3.877c0 5.326-4.987 9.441-10.28 8.704a1 1 0 0 1 .275-1.981c4.16.58 8.005-2.68 8.005-6.723v-3.877a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 6a1 1 0 0 1 1-1c2.807 0 5 2.375 5 5.2a1 1 0 1 1-2 0C15 8.386 13.611 7 12 7a1 1 0 0 1-1-1M8.797 7.489a1 1 0 0 1 .499 1.323A3.4 3.4 0 0 0 9 10.2v3.6c0 1.814 1.389 3.2 3 3.2s3-1.386 3-3.2a1 1 0 1 1 2 0c0 2.825-2.193 5.2-5 5.2s-5-2.375-5-5.2v-3.6c0-.788.17-1.539.474-2.212a1 1 0 0 1 1.323-.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FingerPrint;
