import React from "react";
const DeliveryTracking_02: React.FC<
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
        d="M2 1.75a.75.75 0 0 0-.75.75v5.75h1v12.033c0 .257.103.503.286.684a.98.98 0 0 0 .689.283H12v-1.933H4.2V8.25h15.6v.783L21.75 9v-.75h1V2.5a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 11.5h-3v-2h3zM18 10.75c-2.63 0-4.75 2.152-4.75 4.79 0 1.52.614 2.707 1.753 3.716.686.608 1.902 1.89 2.357 2.634a.75.75 0 0 0 1.268.02c.49-.751 1.697-2.058 2.37-2.654 1.138-1.009 1.752-2.197 1.752-3.716 0-2.638-2.12-4.79-4.75-4.79m-.008 3c-.962 0-1.742.784-1.742 1.75s.78 1.75 1.742 1.75h.016c.962 0 1.742-.784 1.742-1.75s-.78-1.75-1.742-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryTracking_02;
