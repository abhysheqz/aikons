import React from "react";
const Knowledge_02: React.FC<
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
        d="M20.611 13.084a1 1 0 0 1 .18 1.402A3.9 3.9 0 0 0 20 16.875a3.9 3.9 0 0 0 .791 2.389 1 1 0 1 1-1.582 1.222A5.9 5.9 0 0 1 18 16.875a5.9 5.9 0 0 1 1.209-3.611 1 1 0 0 1 1.402-.18M12.75 7.375a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M2.75 7.375a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5 12.876 16-.001a1 1 0 1 1 0 2l-16 .001a1 1 0 0 0-1 1v1.999a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-1.999a3 3 0 0 1 3-3M10.467 6.224a3.53 3.53 0 0 1 3.623.342l.042.034.015.012.006.006.003.002v.001l.002.001a1 1 0 0 1-1.302 1.518l-.027-.02a1.524 1.524 0 0 0-1.685.02 1 1 0 0 1-1.302-1.518l.001-.001.001-.001.003-.002.006-.006.015-.012a2 2 0 0 1 .17-.127c.103-.072.248-.16.43-.249"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Knowledge_02;
