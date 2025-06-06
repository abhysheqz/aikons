import React from "react";
const ShareLocation_02: React.FC<
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
        d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10M9 21.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11h.006"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7c-2.21 0-4 1.809-4 4.04 0 1.276.5 2.268 1.5 3.155a19.5 19.5 0 0 1 2.04 2.16c.229.289.7.295.93.008.617-.772 1.487-1.687 2.03-2.168 1-.887 1.5-1.879 1.5-3.155C16 8.81 14.21 7 12 7Z"
      />
    </svg>
  );
};
export default ShareLocation_02;
