import React from "react";
const TabletConnectedBluetooth: React.FC<
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
        d="M16.127 6.349a.75.75 0 0 1 .752.005l3.5 2.058a.75.75 0 0 1 .102 1.221L17.664 12l2.817 2.367a.75.75 0 0 1-.103 1.22l-3.499 2.06A.75.75 0 0 1 15.75 17v-3.39l-2.268 1.905-.965-1.148L15.332 12l-2.816-2.367.965-1.148 2.268 1.906V7a.75.75 0 0 1 .378-.651m1.122 7.262 1.454 1.222-1.454.855zm0-3.222V8.311l1.454.856z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.227 2.25h19.546a.98.98 0 0 1 .977.975V7h-1.954V4.2H8v15.6h12.796V17h1.954v3.775a.976.976 0 0 1-.977.975H2.227a.98.98 0 0 1-.977-.975V3.225c0-.538.438-.975.977-.975"
      />
    </svg>
  );
};
export default TabletConnectedBluetooth;
