import React from "react";
const EquipmentBenchPress: React.FC<
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
        d="M5.5 8.5v-6h2v2h9v-2h2v6h-2v-2H15v3h-2v-3h-2v3H9v-3H7.5v2zM3 4.5v-1h2v4H3v-1H2v-2zM21 4.5v-1h-2v4h2v-1h1v-2z"
      />
      <path
        fill="currentColor"
        d="M8.5 8.75a.75.75 0 0 0-.648.372L4.57 14.75h14.862l-3.283-5.628a.75.75 0 0 0-.648-.372zM19.75 16.25H4.25v2.25c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 21.5v-3h2v3zm8 0v-3h2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentBenchPress;
