import React from "react";
const ComputerPhoneSync: React.FC<
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
        d="M12 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11V9c0-2.828 0-4.243.879-5.121C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.879.826.825.876 2.123.879 4.621"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 14v4c0 1.414 0 2.121.44 2.56.439.44 1.146.44 2.56.44s2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56v-4c0-1.414 0-2.121-.44-2.56C21.122 11 20.415 11 19 11s-2.121 0-2.56.44C16 11.878 16 12.585 16 14M10 21H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m-2 4h2.5v-4H12m0 0v4"
      />
    </svg>
  );
};
export default ComputerPhoneSync;
