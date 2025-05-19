import React from "react";
const CursorMove_02: React.FC<
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
        d="m17.19 11.629 2.388 2.388-1.061 1.06-.577-.576v1.438h-1.5V14.5l-.577.578-1.06-1.061zm-2.112 4.234-.578.577h1.44v1.5H14.5l.577.577-1.06 1.06-2.388-2.387 2.388-2.388zm5.285-1.06 2.387 2.387-2.387 2.387-1.06-1.06.576-.577h-1.44v-1.5h1.44l-.577-.577zm-2.423 3.636v1.44l.577-.577 1.06 1.06-2.387 2.388-2.388-2.387 1.06-1.061.578.577v-1.44z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m1.25 1.25 17.5 6.806-7.778 2.916-2.916 7.778z"
      />
    </svg>
  );
};
export default CursorMove_02;
