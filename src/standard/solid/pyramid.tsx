import React from "react";
const Pyramid: React.FC<
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
        d="M13.27 2.148a1.5 1.5 0 0 0-2.544 0l-9.26 14.815a1.5 1.5 0 0 0 .716 2.188l9.26 3.703a1.5 1.5 0 0 0 1.113 0l9.26-3.703q.081-.034.158-.075l-7.367-3.157a1 1 0 0 1 .788-1.838l7.251 3.108a1.5 1.5 0 0 0-.116-.226zM4.537 15.824l7.46-11.935L12 20.922h-.002l-7.387-2.954 4.78-2.049a1 1 0 1 0-.787-1.838z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pyramid;
