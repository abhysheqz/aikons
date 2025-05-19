import React from "react";
const Puzzle: React.FC<
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
        d="M6.25 5a3.75 3.75 0 1 1 7.49.251h5.008v5.007q.125-.008.251-.008a3.75 3.75 0 1 1-.25 7.492v5.007h-6.98l.353-1q.125-.351.127-.749a2.25 2.25 0 1 0-4.372.75l.353.999H1.25v-6.98l1 .353q.351.126.75.128a2.25 2.25 0 1 0-.75-4.372l-1 .353V5.25h5.007A4 4 0 0 1 6.25 5"
      />
    </svg>
  );
};
export default Puzzle;
