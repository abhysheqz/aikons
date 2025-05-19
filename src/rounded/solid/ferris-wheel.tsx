import React from "react";
const FerrisWheel: React.FC<
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
        d="M12 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 13.896a48 48 0 0 0-.372 1.037l-2.684 7.648a1 1 0 1 1-1.887-.662L9.74 14.27l.024-.068c.254-.726.479-1.366.708-1.817.198-.39.637-1.136 1.527-1.136s1.33.745 1.527 1.136c.23.451.454 1.091.709 1.817l.024.068 2.684 7.648a1 1 0 1 1-1.887.662l-2.685-7.648A49 49 0 0 0 12 13.896"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 3.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M20 5.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M1.25 16.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 8.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 16.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default FerrisWheel;
