import React from "react";
const Pavilon: React.FC<
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
        d="M6.005 11.493v10.01M18.002 11.493v10.01M9.504 21.001l.5-4.504h3.993l.506 4.504M3.006 21.502h17.995"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.166 2.707c.824 3.973 5.778 5.93 8.836 5.812-.808 1.786-1.965 2.781-3.72 2.923H6.29C4.23 10.897 3.3 9.588 2.999 8.52l1.665-.096c5.459-1.126 6.76-4.213 7.281-5.716 0-.268.22-.29.22 0Z"
      />
    </svg>
  );
};
export default Pavilon;
