import React from "react";
const CursorRemoveSelection_02: React.FC<
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
        d="M12.75 17.25h9v2h-9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m2.25 3.25 17.5 6.806-7.778 2.916-2.916 7.778z"
      />
    </svg>
  );
};
export default CursorRemoveSelection_02;
