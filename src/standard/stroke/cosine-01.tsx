import React from "react";
const Cosine_01: React.FC<
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
        d="M22 20.729c-4 1.936-5.412-7.074-5.669-8.684C15.467 6.638 14.121 3 12 3c-2.12 0-3.467 3.638-4.331 9.045C7.412 13.655 6 22.665 2 20.73M2.5 12h2M19.5 12h2M11 12h2"
      />
    </svg>
  );
};
export default Cosine_01;
