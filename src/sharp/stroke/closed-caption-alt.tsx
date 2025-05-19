import React from "react";
const ClosedCaptionAlt: React.FC<
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
        d="M16 13.985h3m-10 0h5m3-2.996h2m-6 0h2m-6 0h2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.903 2.014H2.1a.1.1 0 0 0-.1.1v15.755a.1.1 0 0 0 .1.1h3.902v3.83a.1.1 0 0 0 .162.079l4.855-3.91h10.885a.1.1 0 0 0 .1-.1V2.115a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default ClosedCaptionAlt;
