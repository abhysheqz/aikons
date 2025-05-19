import React from "react";
const Vest: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.509 13.498H10.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 1.998h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.043 8.946 9.004 2.008a.01.01 0 0 0-.013-.005L6 3.499c.5 1 .891 5.35-2 7.502v8.996a.01.01 0 0 0 .006.01L8.992 22a.01.01 0 0 0 .012-.004l2.817-4.79m.222-8.26L14 13.501l-2.179 3.704m.222-8.26 2.953-6.938a.01.01 0 0 1 .013-.005L18 3.5C17.192 5.45 17.727 9.48 20 11v8.996a.01.01 0 0 1-.006.01L15.008 22a.01.01 0 0 1-.012-.004l-3.175-4.79"
      />
    </svg>
  );
};
export default Vest;
