import React from "react";
const Bread_04: React.FC<
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
        d="M3.548 4.365C4.854 3.662 6.606 3.25 8.5 3.25s3.646.412 4.952 1.115c1.275.686 2.298 1.76 2.298 3.135 0 1.066-.62 1.953-1.481 2.612l.518 10.638H2.212l.519-10.638C1.869 9.453 1.25 8.566 1.25 7.5c0-1.375 1.023-2.449 2.298-3.135"
      />
      <path
        fill="currentColor"
        d="M16.289 20.75h5.499l-.519-10.638c.862-.659 1.481-1.546 1.481-2.612 0-1.375-1.023-2.449-2.298-3.135-1.306-.703-3.058-1.115-4.952-1.115h-.978c1.36.828 2.728 2.233 2.728 4.25 0 1.363-.64 2.457-1.448 3.261z"
      />
    </svg>
  );
};
export default Bread_04;
