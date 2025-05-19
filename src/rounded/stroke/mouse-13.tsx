import React from "react";
const Mouse_13: React.FC<
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
        d="M5.185 18.994c4.295 2.437 7.09.118 9.184-3.448s2.74-7.103-1.554-9.54-7.09-.118-9.184 3.448-2.74 7.103 1.554 9.54Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 8 .72-1.294c.903-1.628 1.355-2.441 2.123-2.655.767-.214 1.55.256 3.116 1.196l2.076 1.245c.688.413 1.568.168 1.965-.547"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.25 10.299c.233-.403.35-.605.375-.802a1 1 0 0 0-.198-.74c-.12-.158-.322-.274-.726-.507s-.605-.35-.803-.375a1 1 0 0 0-.739.198c-.158.12-.274.323-.507.726l-.5.866c-.233.404-.35.605-.375.803a1 1 0 0 0 .198.739c.12.158.322.274.726.507s.605.35.802.375a1 1 0 0 0 .74-.198c.157-.12.274-.322.507-.726z"
      />
    </svg>
  );
};
export default Mouse_13;
