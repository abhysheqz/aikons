import React from "react";
const CursorLoading_02: React.FC<
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
        d="m1.75 1.25 17.5 6.806-7.778 2.916-2.916 7.778z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.443 17.5c1.088-.742 1.807-1.969 1.807-3.375V12.25h-8.5v1.875c0 1.406.719 2.633 1.807 3.375-1.088.742-1.807 1.969-1.807 3.375v1.875h8.5v-1.875c0-1.406-.719-2.633-1.807-3.375m.307-3.375c0 1.424-1.205 2.625-2.75 2.625s-2.75-1.2-2.75-2.625v-.375h5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorLoading_02;
