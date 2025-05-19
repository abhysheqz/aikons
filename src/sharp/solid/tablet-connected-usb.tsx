import React from "react";
const TabletConnectedUsb: React.FC<
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
        d="M13 7.5h-2v2h1.42l.857 1.5H10v2h4.983l-.642 1.5H13v2h2a1 1 0 0 0 .92-.606L17.16 13h1.324a2.25 2.25 0 1 0 0-2H15.58l-1.712-2.996A1 1 0 0 0 13 7.5"
      />
      <path
        fill="currentColor"
        d="M2.227 2.25h19.546a.98.98 0 0 1 .977.975V7h-1.954V4.2H8v15.6h12.796V17h1.954v3.775a.976.976 0 0 1-.977.975H2.227a.98.98 0 0 1-.977-.975V3.225c0-.538.438-.975.977-.975"
      />
    </svg>
  );
};
export default TabletConnectedUsb;
