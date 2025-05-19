import React from "react";
const CursorMove_01: React.FC<
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
        d="m14.19 1.25 2.388 2.389-1.061 1.06-.577-.576v1.439h-1.5v-1.44l-.577.578-1.061-1.061zm-2.112 4.235-.578.577h1.44v1.5H11.5l.577.577-1.06 1.06-2.388-2.387 2.388-2.388zm5.285-1.06 2.387 2.387L17.363 9.2l-1.061-1.061.577-.577h-1.44v-1.5h1.44l-.577-.577zM14.94 8.061V9.5l.577-.577 1.06 1.06-2.387 2.388-2.388-2.387 1.06-1.06.578.576v-1.44z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.226 4.447-3.6-3.197-1.376 19 5.187-3.398 2.79 5.898 3.975-1.957-2.65-5.67 6.198-1.33-2.761-2.452-2.799 2.798-7.33-7.327z"
      />
    </svg>
  );
};
export default CursorMove_01;
