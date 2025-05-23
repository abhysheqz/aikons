import React from "react";
const FileDollar: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.001h5a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 22.002H5a2 2 0 0 1-2-2V9.817A2 2 0 0 1 3.587 8.4l5.829-5.817A2 2 0 0 1 10.829 2H18a2 2 0 0 1 2 2v4.987"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 13v.9m0 0c-1.266 0-2.292.836-2.292 1.867 0 1.03.625 1.6 2.292 1.6s2.5.533 2.5 1.866-1.12 1.867-2.5 1.867m0-7.2c1.266 0 2.292.836 2.292 1.867M18.5 21.1v.9m0-.9c-1.38 0-2.5-.836-2.5-1.867"
      />
    </svg>
  );
};
export default FileDollar;
