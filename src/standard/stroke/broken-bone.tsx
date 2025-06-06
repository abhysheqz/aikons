import React from "react";
const BrokenBone: React.FC<
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
        d="M7.008 8.026h-2m4-2.003V4.019M13.008 16.038v2.004m2-4.007h2M5.388 20.838a2.5 2.5 0 1 0 3.112-3.63l2-5.208L8 13l-1.5-1.5L5 16.05a2.5 2.5 0 1 0 .388 4.788m0 0A2.5 2.5 0 0 0 6.792 19.5M20.57 5.094a2.62 2.62 0 0 0-.652-2.35 2.35 2.35 0 0 0-3.43 0c-.703.735-.884 1.811-.543 2.722L11 7.769l2.4 1.077V11l4.151-2.19q.132.21.309.395a2.35 2.35 0 0 0 3.43 0 2.623 2.623 0 0 0 0-3.59 2.4 2.4 0 0 0-.72-.52m0 0a2.33 2.33 0 0 0-1.882-.047"
      />
    </svg>
  );
};
export default BrokenBone;
