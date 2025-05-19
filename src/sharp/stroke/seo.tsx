import React from "react";
const Seo: React.FC<
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
        d="m5 21 2.413-2.413m0 0a4.444 4.444 0 1 0 6.285-6.285 4.444 4.444 0 0 0-6.285 6.285Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 16.188a7.4 7.4 0 0 1-1-3.726C2 8.341 5.358 5 9.5 5h5c4.142 0 7.5 3.341 7.5 7.462 0 3.25-2.087 6.014-5 7.038"
      />
    </svg>
  );
};
export default Seo;
