import React from "react";
const Unlink_04: React.FC<
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
        d="M10 13.229q.213.349.504.654a3.56 3.56 0 0 0 4.454.59q.391-.24.73-.59l3.239-3.372c1.43-1.49 1.43-3.904 0-5.394a3.564 3.564 0 0 0-5.183 0l-.714.743"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.97 18.14-.713.743a3.564 3.564 0 0 1-5.183 0c-1.432-1.49-1.432-3.905 0-5.394l3.239-3.372a3.564 3.564 0 0 1 5.183 0q.291.305.504.654M21 16h-2m-3 5v-2M3 8h2m3-5v2"
      />
    </svg>
  );
};
export default Unlink_04;
