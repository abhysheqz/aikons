import React from "react";
const Wheelchair: React.FC<
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
        d="M7 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0M16.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.508 16c0 .828-.669 1.5-1.493 1.5H7A1.497 1.497 0 0 1 5.508 16c0-.828.668-1.5 1.493-1.5h.014c.824 0 1.493.672 1.493 1.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.5 15h.603l2.146 3.225L23 17.147l-.73-1.862-1.25.49L19.176 13H17.5V6H6.08l-.75-4H2v2h1.67l1.347 7.184c1.78-.297 5.67.05 6.983 3.817h3.5V18h2z"
      />
    </svg>
  );
};
export default Wheelchair;
