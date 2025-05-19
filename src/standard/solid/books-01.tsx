import React from "react";
const Books_01: React.FC<
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
        d="M5.98 3.5H4.5a1 1 0 1 0 0 2h1.235c.498.331.765.894.765 1.5s-.267 1.169-.765 1.5H4.5a1 1 0 1 0 0 2H20A2.5 2.5 0 0 0 22.5 8V6A2.5 2.5 0 0 0 20 3.5H5.98"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.765 10.5H19a1 1 0 1 0 0-2H4.5A2.5 2.5 0 0 0 2 11v2a2.5 2.5 0 0 0 2.5 2.5H19a1 1 0 1 0 0-2h-.235c-.498-.331-.765-.894-.765-1.5s.267-1.169.765-1.5m-2.47 0H4.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h11.795a3.95 3.95 0 0 1 0-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.48 13.5H4.5a1 1 0 1 0 0 2h.735c.498.331.765.894.765 1.5s-.267 1.169-.765 1.5H4.5a1 1 0 1 0 0 2h15A2.5 2.5 0 0 0 22 18v-2a2.5 2.5 0 0 0-2.5-2.5H5.48"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Books_01;
