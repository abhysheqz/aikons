import React from "react";
const Laughing: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 11c.504-5.053 4.789-9 10-9s9.496 3.947 10 9m-3 8.175A10.04 10.04 0 0 1 12 22c-2.722 0-5.19-1.076-7-2.825M12 18a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 9.5a1.5 1.5 0 1 1 3 0m4 0a1.5 1.5 0 0 1 3 0M6 12c-1.555.399-4.459 1.234-3.938 3.782.268 1.26 1.675 1.493 2.438.926C6.338 15.343 4.5 14 6 12M18 12c1.555.399 4.459 1.234 3.938 3.782-.268 1.26-1.674 1.493-2.438.926C17.662 15.343 19.5 14 18 12"
      />
    </svg>
  );
};
export default Laughing;
