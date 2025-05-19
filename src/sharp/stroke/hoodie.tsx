import React from "react";
const Hoodie: React.FC<
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
        strokeWidth={1.5}
        d="M18 11.004v10.994H6V11.003"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 16.001c0 1 0 1.999 1.5 2.998M10 16.001c0 1 0 1.999-1.5 2.998"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 5.007-2 3.997-2-3.997"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.822 6.484 1.678 1.06 2.5 4.67-1.5 7.263H18M6.5 6.507l-2 1.037-2.5 4.67 1.5 7.263H6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.018 5.971c-1.01-2.276-3.296-3.969-5.993-3.969s-5 1.73-6.006 3.958a.01.01 0 0 0 .005.013l5.995 3.025 5.995-3.014a.01.01 0 0 0 .004-.013Z"
      />
    </svg>
  );
};
export default Hoodie;
