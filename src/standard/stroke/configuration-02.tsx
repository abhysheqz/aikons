import React from "react";
const Configuration_02: React.FC<
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
        d="M2 13.967v-3.934c2.857 0 4.716-3.103 3.27-5.566L8.734 2.5c1.464 2.494 5.07 2.494 6.534 0l3.464 1.967c-1.446 2.463.411 5.566 3.268 5.566v3.934c-2.857 0-4.713 3.103-3.266 5.566L15.269 21.5c-1.464-2.495-5.072-2.495-6.537 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 9.5 2-2h-4c-1 0-2 1-2 2v3l-5.384 5.41a2.103 2.103 0 1 0 2.974 2.974L11 15.5h3c1 0 2-1 2-2v-4l-2 2a1.423 1.423 0 0 1-2 0 1.423 1.423 0 0 1 0-2"
      />
    </svg>
  );
};
export default Configuration_02;
