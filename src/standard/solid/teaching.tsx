import React from "react";
const Teaching: React.FC<
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
        d="M13.317 13.052a1 1 0 0 1 .632 1.265c-.585 1.754-1.596 2.748-2.869 3.24-1.145.444-2.431.444-3.495.443H7.5c-1.17 0-2.095.013-2.857.308-.665.257-1.279.763-1.694 2.009a1 1 0 0 1-1.897-.633c.584-1.755 1.595-2.748 2.869-3.241C5.065 15.999 6.35 16 7.415 16H7.5c1.17 0 2.096-.012 2.858-.307.664-.258 1.278-.764 1.694-2.009a1 1 0 0 1 1.265-.632"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.001 5.996a3 3 0 0 1 3-2.996h10.001a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H16a1 1 0 1 1 0-2h4.002a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 .999L9 7A1 1 0 1 1 7 7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M11 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m3.5 4a1 1 0 0 1 1-1H18a1 1 0 1 1 0 2h-2.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Teaching;
