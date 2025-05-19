import React from "react";
const CallIncoming_01: React.FC<
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
        d="M20.982 4a1 1 0 1 1 0 2H16.69v2.293c0 .265-.098.543-.345.64a1 1 0 0 1-1.07-.226l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.07-.225c.247.096.345.374.345.64V4zM6.497 2.294a2 2 0 0 0-3.203-.52L1.861 3.207a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.658 17.103 17.102a2.88 2.88 0 0 0 2.17-.858l1.432-1.433a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.309.374L11.45 18.62a16.07 16.07 0 0 1-6.586-6.586L8.18 8.717a2 2 0 0 0 .374-2.309z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallIncoming_01;
