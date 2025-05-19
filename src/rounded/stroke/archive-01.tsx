import React from "react";
const Archive_01: React.FC<
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
        d="M10 17V7c0-1.886 0-2.828-.586-3.414S7.886 3 6 3s-2.828 0-3.414.586S2 5.114 2 7v10c0 1.886 0 2.828.586 3.414S4.114 21 6 21s2.828 0 3.414-.586S10 18.886 10 17M21.456 15.71l-2.409-8.518c-.475-1.68-.713-2.52-1.363-2.93a2 2 0 0 0-.162-.092c-.686-.348-1.534-.123-3.23.327-1.74.46-2.608.691-3.029 1.35a2 2 0 0 0-.094.164c-.356.696-.112 1.557.375 3.28l2.409 8.517c.475 1.68.713 2.52 1.363 2.93q.08.05.162.092c.686.348 1.534.123 3.23-.327 1.74-.46 2.608-.691 3.029-1.35q.05-.08.094-.164c.356-.696.112-1.557-.375-3.28"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 17h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17.991 17.003.009-.002"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 9 7-2"
      />
    </svg>
  );
};
export default Archive_01;
