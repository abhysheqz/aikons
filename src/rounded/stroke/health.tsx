import React from "react";
const Health: React.FC<
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
        strokeWidth={1.5}
        d="M19.463 3.994c-2.682-1.645-5.023-.983-6.429.073-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.011 7.219 2.35 4.537 3.994 1.018 6.152.222 13.274 8.34 19.283c1.546 1.144 2.319 1.716 3.66 1.716s2.114-.572 3.66-1.716c8.118-6.009 7.322-13.13 3.803-15.29ZM12 9v6m-3-3h6"
      />
    </svg>
  );
};
export default Health;
