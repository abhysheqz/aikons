import React from "react";
const Uv_03: React.FC<
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
        d="M6.246 13.25v-.75a5.75 5.75 0 0 1 11.5 0v.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.996 3.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M17.656 5.426a1 1 0 0 1 1.414 0l.007.006a1 1 0 1 1-1.415 1.414l-.006-.006a1 1 0 0 1 0-1.414M4.926 6.847a1 1 0 0 1 0-1.414l.006-.007A1 1 0 0 1 6.346 6.84l-.006.007a1 1 0 0 1-1.414 0M21 11.496a1 1 0 0 1 1 1v.009a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1M3 11.496a1 1 0 0 1 1 1v.009a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1M6.996 19.5v-4h-2v5a1 1 0 0 0 1 1h5v-6h-2v4zM15.497 19.058l1.571-3.93 1.857.744-2.251 5.628H14.32l-2.252-5.628 1.857-.743z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Uv_03;
