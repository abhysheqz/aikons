import React from "react";
const YenReceive: React.FC<
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
        d="M17.883 8.576a1 1 0 0 1 .617.924V11h3a1 1 0 1 1 0 2h-3v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217M1.86 3.231a1 1 0 0 1 1.409.13L8 9.047l4.731-5.688a1 1 0 1 1 1.538 1.28L9 10.973V20a1 1 0 1 1-2 0v-9.027L1.731 4.64a1 1 0 0 1 .13-1.409"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenReceive;
