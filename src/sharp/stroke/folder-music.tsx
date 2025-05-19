import React from "react";
const FolderMusic: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 6.995h4.017m0 0H22v4.002m-9.982-4.002L9 3H2v18h10M19.396 18.745c0 1.244-.984 2.252-2.198 2.252s-2.199-1.008-2.199-2.252.985-2.253 2.199-2.253 2.198 1.009 2.198 2.253Zm0 0V13s0 2.7 2.604 2.7"
      />
    </svg>
  );
};
export default FolderMusic;
