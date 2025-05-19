import React from "react";
const CarTime: React.FC<
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
        d="M17 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M17.75 4a.75.75 0 1 0-1.5 0v2c0 .323.206.61.513.712l1.5.5a.75.75 0 0 0 .474-1.424l-.987-.329z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.45 9.9 1.229.921 1.616-3.879A2.75 2.75 0 0 1 7.833 5.25h2.417a.75.75 0 1 1 0 1.5H7.833c-.505 0-.96.303-1.154.77l-1.652 3.964 1.065.266h11.815l1.065-.266 1.35-.662L21.55 9.9a.75.75 0 0 1 .9 1.2l-1.432 1.074 1.27 1.906c.301.452.462.983.462 1.526V22a.75.75 0 0 1-.75.75h-2.25A.75.75 0 0 1 19 22v-2.25H5V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6.394c0-.543.16-1.074.462-1.526l1.27-1.906L1.55 11.1a.75.75 0 1 1 .9-1.2M18 15a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V16a1 1 0 0 1 1-1M7 16a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CarTime;
