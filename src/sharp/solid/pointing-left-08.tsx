import React from "react";
const PointingLeft_08: React.FC<
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
        d="M14.504 5.311q.369-.079.744-.056c.776.05 1.535.487 3.212 1.694l.012.008 4.278 2.834v9.817c0 1.747-1.333 3.142-2.952 3.142h-7.241c-.708 0-1.281-.589-1.281-1.315v-1.433l2.054.007v-.801h-1.887q-.226 0-.427-.075a1.31 1.31 0 0 1-.854-1.24V16.46l2.395.007v-.801h-2.228q-.226-.002-.427-.075a1.31 1.31 0 0 1-.854-1.24v-1.427H12v-.8H2.53c-.696 0-1.281-.602-1.281-1.37 0-.77.585-1.372 1.281-1.372h12.254v-.8h-4.146l2.686-2.642c.46-.362.814-.55 1.179-.629"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.459 1.25 1.252 4.457l3.207 3.207L5.873 6.25l-.793-.793h3.586v-2H5.08l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_08;
