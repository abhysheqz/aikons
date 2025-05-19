import React from "react";
const UsbNotConnected_02: React.FC<
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
        d="M5.875 6.875a1.75 1.75 0 0 0-1.75 1.75v8.5a5.75 5.75 0 0 0 9.272 4.546.288.288 0 0 0 .02-.432l-.273-.273a.32.32 0 0 0-.233-.091 2.5 2.5 0 0 1-1.804-4.268l1.091-1.09a.2.2 0 0 0 0-.283l-1.09-1.091a2.5 2.5 0 0 1 3.535-3.536l.64.641a.2.2 0 0 0 .342-.141V8.625a1.75 1.75 0 0 0-1.75-1.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.168 11.918a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414M5.375 3.125a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4.5a1 1 0 1 1-2 0v-4.5h-5v4.5a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.625 4.875a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbNotConnected_02;
