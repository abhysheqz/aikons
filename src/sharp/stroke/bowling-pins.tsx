import React from "react";
const BowlingPins: React.FC<
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
        d="M12.5 10.544a6 6 0 1 1 1 11.267"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.991 15H18m-3 0h.009m1.486-2h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m5.884 6.682-.429-2.166C5.197 3.215 6.184 2 7.5 2s2.303 1.215 2.045 2.516l-.43 2.166c-.645 3.256 1.113 5.21 2.335 7.914a6.2 6.2 0 0 1 .43 3.765v.003c-.216 1.088-.556 2.8-1.275 3.636h-6.21c-.719-.835-1.06-2.548-1.275-3.636v-.003a6.2 6.2 0 0 1 .43-3.765c1.222-2.705 2.98-4.658 2.334-7.914Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 9h3"
      />
    </svg>
  );
};
export default BowlingPins;
