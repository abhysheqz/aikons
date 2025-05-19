import React from "react";
const ArrowLeft_04: React.FC<
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
        d="M10 12h10M5.414 13.603l.967.76c1.565 1.234 2.348 1.851 2.984 1.57.635-.281.635-1.245.635-3.172V11.24c0-1.927 0-2.89-.635-3.172-.636-.281-1.419.336-2.984 1.57l-.967.76C4.471 11.14 4 11.511 4 12s.471.86 1.414 1.603"
      />
    </svg>
  );
};
export default ArrowLeft_04;
