import React from "react";
const SimcardDual: React.FC<
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
        d="M16 16h4a2 2 0 0 0 2-2V6.898a2 2 0 0 0-.671-1.495l-3.26-2.898A2 2 0 0 0 16.738 2H12a2 2 0 0 0-2 2v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 20V8a2 2 0 0 1 2-2h5.786a2 2 0 0 1 1.267.452L15.267 9.9A2 2 0 0 1 16 11.448V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"
      />
    </svg>
  );
};
export default SimcardDual;
