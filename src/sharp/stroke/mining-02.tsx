import React from "react";
const Mining_02: React.FC<
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
        strokeWidth={1.5}
        d="m10.79 11.235-7.382 7.399a.1.1 0 0 0 0 .141l1.911 1.95a.1.1 0 0 0 .142 0l7.362-7.444m2.288-8.294c-3.54-2.203-6.664-2.25-8.264-2.23-.095.001-.135.122-.06.18 1.948 1.506 2.944 1.829 5.776 4.564m6.528 1.474c2.142 3.38 2.296 7.202 2.285 8.335 0 .094-.12.134-.179.06-1.53-1.947-1.921-3.059-4.625-5.909M11.725 8.47l3.794 3.892a.1.1 0 0 0 .14.001l4.518-4.458a.1.1 0 0 0 .002-.142L16.384 3.87a.1.1 0 0 0-.14-.001l-4.518 4.458a.1.1 0 0 0-.002.142Z"
      />
    </svg>
  );
};
export default Mining_02;
