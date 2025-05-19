import React from "react";
const CallDisabled: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 2 20 20M12.067 20.16l-4.013-4.133-5.977 3.02a.01.01 0 0 0-.003.016c1.738 2.128 3.587 3.124 5.198 2.877 2.102-.323 5.408-1.542 8.653-4.683.299-.253.62-.549.952-.881m3.382-4.539c1.277-2.405 2.49-5.153.998-7.453-.329-.506-1.596-1.878-2.32-2.35a.01.01 0 0 0-.014.004l-2.948 5.965zm0 0a19 19 0 0 1-2.097 3.116"
      />
    </svg>
  );
};
export default CallDisabled;
