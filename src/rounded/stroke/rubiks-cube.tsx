import React from "react";
const RubiksCube: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.643 3.585C10.295 2.862 11.121 2.5 12 2.5s1.705.362 3.357 1.085l1.705.747C19.687 5.482 21 6.056 21 7s-1.313 1.518-3.938 2.668l-1.705.747C13.705 11.138 12.879 11.5 12 11.5s-1.705-.362-3.357-1.085l-1.705-.747C4.313 8.518 3 7.944 3 7s1.313-1.518 3.938-2.668z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 7v11c0 .944-1.313 1.518-3.938 2.668l-1.705.747C13.705 22.138 12.879 22.5 12 22.5s-1.705-.362-3.357-1.085l-1.705-.747C4.313 19.518 3 18.944 3 18V7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21 13-9 4.5-9-4M12 22.5v-11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 20.5v-11L7 4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 20.5v-11l9.5-5"
      />
    </svg>
  );
};
export default RubiksCube;
