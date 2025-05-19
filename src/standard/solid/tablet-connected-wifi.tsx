import React from "react";
const TabletConnectedWifi: React.FC<
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
        d="M19.875 21.75a2.75 2.75 0 0 0 2.75-2.75l.004-.894a1 1 0 1 0-2 0v.647a1 1 0 0 1-1 1H6.7V4.247h12.93a1 1 0 0 1 1 1v.716a1 1 0 1 0 2 0L22.625 5a2.75 2.75 0 0 0-2.75-2.75h-16A2.75 2.75 0 0 0 1.125 5v14a2.75 2.75 0 0 0 2.75 2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.867 16a1 1 0 0 1 1-1h.008a1 1 0 0 1 0 2h-.008a1 1 0 0 1-1-1M11.168 10.293C12.345 9.115 14.643 8 16.875 8s4.53 1.115 5.707 2.293a1 1 0 0 1-1.414 1.414c-.823-.822-2.62-1.707-4.293-1.707s-3.47.885-4.293 1.707a1 1 0 0 1-1.414-1.414M13.66 12.8c.846-.864 1.997-1.3 3.214-1.3s2.368.436 3.214 1.3a1 1 0 0 1-1.428 1.4c-.433-.442-1.05-.7-1.786-.7s-1.353.258-1.786.7a1 1 0 0 1-1.428-1.4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TabletConnectedWifi;
