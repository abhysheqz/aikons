import React from "react";
const PenConnectWifi: React.FC<
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
        d="M22.039 10.25A2.855 2.855 0 1 0 18 6.21l-.93.93.068-.062 4.04 4.03zm-1.92 1.92-8.522 8.52a5.7 5.7 0 0 1-2.654 1.503l-2.636.66a.75.75 0 0 1-.91-.91l.66-2.636a5.7 5.7 0 0 1 1.502-2.654l8.583-8.583-.064.07zM1.397 3.855c1.582-1.678 3.784-2.73 6.228-2.73s4.646 1.052 6.228 2.73a1 1 0 1 1-1.456 1.372c-1.233-1.308-2.92-2.102-4.772-2.102s-3.54.794-4.772 2.102a1 1 0 1 1-1.456-1.372m2.75 2.917c.879-.931 2.108-1.522 3.478-1.522s2.6.59 3.478 1.522a1 1 0 1 1-1.456 1.372 2.77 2.77 0 0 0-2.022-.894 2.77 2.77 0 0 0-2.022.894 1 1 0 1 1-1.456-1.372m2.469 3.353a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2h-.009a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PenConnectWifi;
