import React from "react";
const Cosine_02: React.FC<
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
        d="M22 3.271c-4-1.936-5.412 7.074-5.669 8.684C15.467 17.362 14.121 21 12 21c-2.12 0-3.467-3.638-4.331-9.045C7.412 10.345 6 1.335 2 3.27M2.5 12h2M19.5 12h2M10.5 12h3"
      />
    </svg>
  );
};
export default Cosine_02;
