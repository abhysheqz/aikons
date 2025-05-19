import React from "react";
const Resize_02: React.FC<
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
        d="M9.255 5a2.5 2.5 0 1 1 5 0v4.978H18a3.75 3.75 0 0 1 3.75 3.75v5.522A3.75 3.75 0 0 1 18 23h-8a.75.75 0 0 1-.624-.334l-4.593-6.885a2.49 2.49 0 0 1 3.576-3.43l.896.768z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.543 1 1.414 1.414-.793.793h2.086v2h-2.086l.793.793-1.414 1.414-3.207-3.207zM4.957 1l3.207 3.207-3.207 3.207L3.543 6l.793-.793H2.25v-2h2.086l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Resize_02;
