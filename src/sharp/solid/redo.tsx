import React from "react";
const Redo: React.FC<
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
        d="M21.583 2.173 21.091 7.8l.071.123-.086.05-.103 1.175-7.066-.695.196-1.982 3.976.391A8 8 0 0 0 12 4.074c-4.418 0-8 3.567-8 7.967s3.582 7.967 8 7.967 8-3.567 8-7.967v-.995h2v.995C22 17.541 17.523 22 12 22S2 17.541 2 12.041s4.477-9.958 10-9.958a10 10 0 0 1 7.307 3.16L19.59 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Redo;
