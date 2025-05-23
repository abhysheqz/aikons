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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V11.5m-9.982-4.506L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h8.018M19.397 18.745c0 1.243-.984 2.252-2.198 2.252-1.215 0-2.199-1.009-2.199-2.252 0-1.244.984-2.253 2.198-2.253 1.215 0 2.2 1.009 2.2 2.253m0 0V13s1.307 2.7 2.604 2.7"
      />
    </svg>
  );
};
export default FolderMusic;
