import React from "react";
const Castle_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.995 21.99v-4.996h6v4.997M9.995 13.996h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.998 22V8.018a.01.01 0 0 1 .01-.01h3.485l1.002 2.499H9.49l1.002-2.499h3.037l.952 2.453 2.017.068 1.008-2.52h3.486a.01.01 0 0 1 .01.01v13.98zM11.99 7.28l.014-2.268m0 0V2.01a.01.01 0 0 1 .01-.01h3.971v3.012z"
      />
    </svg>
  );
};
export default Castle_02;
