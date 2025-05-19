import React from "react";
const InsertPi: React.FC<
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
        d="M21 1.5a1 1 0 0 1 1 1c0 1.117-.571 2.015-1.33 2.603A4.4 4.4 0 0 1 18 6H7.531a3.566 3.566 0 0 0-3.539 3.124 1 1 0 1 1-1.984-.248A5.566 5.566 0 0 1 7.53 4H18c.532 0 1.064-.183 1.445-.478.37-.287.555-.64.555-1.022a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.59 4.504a1 1 0 0 1 .906 1.087l-.5 5.5a1 1 0 1 1-1.992-.181l.5-5.5a1 1 0 0 1 1.086-.906M10.044 4.501a1 1 0 0 1 .955 1.043 269 269 0 0 1-.301 5.764c-.132 2-.302 3.946-.523 4.915-.21.922-.55 1.963-1.18 2.79C8.33 19.884 7.35 20.5 6 20.5a1 1 0 1 1 0-2c.65 0 1.07-.26 1.405-.7.37-.486.63-1.195.82-2.023.179-.781.342-2.553.477-4.6.133-2.012.232-4.19.299-5.72a1 1 0 0 1 1.043-.956M17 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.751 3.25a.75.75 0 0 0-1.5 0v.75h-.583a.75.75 0 0 0 0 1.5h.583V19a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InsertPi;
