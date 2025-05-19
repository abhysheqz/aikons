import React from "react";
const Mirror: React.FC<
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
        d="M4 6.875a1 1 0 0 1 1 1v3h2a1 1 0 1 1 0 2H5v6h14v-6h-2a1 1 0 1 1 0-2h2v-3a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-14a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.125a5.75 5.75 0 0 0-5.75 5.75v8c0 .43.021.826.097 1.172.078.353.223.7.502.979.28.28.626.424.98.502.345.076.741.097 1.171.097h6c.43 0 .826-.021 1.172-.097.353-.078.7-.223.979-.502.28-.28.424-.626.502-.98.076-.345.097-.741.097-1.171v-8A5.75 5.75 0 0 0 12 1.125m-.47 4.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zm2 1.5a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 1.06 1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 11.875a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m13 0a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mirror;
