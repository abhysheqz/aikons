import React from "react";
const ElectricHome_02: React.FC<
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
        d="M12.409 1.371a.75.75 0 0 0-.818 0l-10 6.5a.75.75 0 0 0-.328.766l2.5 13.492a.75.75 0 0 0 .737.613l6.75.004V19.75H10.1L7.75 16.227V12.25h1.501V10h1.5v2.25h2.5V10h1.5v2.25h1.5v3.977L13.9 19.75h-1.15v2.997l6.749.003a.75.75 0 0 0 .738-.613l2.5-13.5a.75.75 0 0 0-.329-.766z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricHome_02;
