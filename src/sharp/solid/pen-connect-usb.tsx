import React from "react";
const PenConnectUsb: React.FC<
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
        d="M19.028 4.47a.75.75 0 0 0-1.06 0L15.5 6.938l4.06 4.061 2.468-2.469a.75.75 0 0 0 0-1.06zM18.5 12.06l-4.061-4.062-9.691 9.691v4.061h4.06zM4.75 2.25h-2v2h1.382l.5 1H1.75v2h4.613l-.334 1H4.75v2h2a1 1 0 0 0 .949-.684L8.47 7.25h.843a1.75 1.75 0 1 0 0-2H6.868L5.644 2.803a1 1 0 0 0-.894-.553"
      />
    </svg>
  );
};
export default PenConnectUsb;
