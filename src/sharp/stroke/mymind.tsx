import React from "react";
const Mymind: React.FC<
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
        d="M19.496 10.106c1.54 5.422-.567 10.665-4.707 11.711s-8.744-2.501-10.285-7.923c-1.54-5.422.567-10.665 4.707-11.711s8.744 2.501 10.285 7.923Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 17-2-10 5 8.5z"
      />
      <circle
        cx={8.5}
        cy={11}
        r={1}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Mymind;
