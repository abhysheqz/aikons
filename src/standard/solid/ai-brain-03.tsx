import React from "react";
const AiBrain_03: React.FC<
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
        d="M14.5 1.25A3.24 3.24 0 0 0 12 2.423a3.251 3.251 0 0 0-5.677 1.388A3.75 3.75 0 0 0 3.414 8.6a3.75 3.75 0 0 0 0 6.798 3.751 3.751 0 0 0 2.909 4.79A3.251 3.251 0 0 0 12 21.577a3.251 3.251 0 0 0 5.677-1.388 3.75 3.75 0 0 0 2.909-4.79 3.75 3.75 0 0 0 0-6.798 3.751 3.751 0 0 0-2.909-4.79A3.25 3.25 0 0 0 14.5 1.25m-4.278 7a.75.75 0 0 0-.703.49l-2.222 6a.75.75 0 0 0 1.407.52l.707-1.91h2.178l.708 1.91a.75.75 0 0 0 1.406-.52l-2.222-6a.75.75 0 0 0-.703-.49zm.812 3.6H9.967l.533-1.44zM16.25 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_03;
