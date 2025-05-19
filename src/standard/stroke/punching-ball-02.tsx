import React from "react";
const PunchingBall_02: React.FC<
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
        d="m7 22 1.24-2.894a1 1 0 0 1 .92-.606h5.68a1 1 0 0 1 .92.606L17 22zM12 12v6.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2C9.515 2 7.5 3.5 7.5 6s2 2.5 3 5l.224.447a1 1 0 0 0 .894.553h.764a1 1 0 0 0 .894-.553L13.5 11c1-2.5 3-2.5 3-5S14.485 2 12 2Z"
      />
    </svg>
  );
};
export default PunchingBall_02;
