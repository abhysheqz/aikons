import React from "react";
const Blockchain_05: React.FC<
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
        d="M12.375 1.35a.75.75 0 0 0-.75 0l-6.5 3.75a.75.75 0 0 0-.375.65v7.5a.75.75 0 0 0 .375.65l6.5 3.75a.75.75 0 0 0 .75 0l6.5-3.75a.75.75 0 0 0 .375-.65v-7.5a.75.75 0 0 0-.375-.65zM11.25 9.933l-5-2.884v5.768l5 2.885zm6.5 2.884-5 2.885V9.933l5-2.884zM9.25 18.75h5.5V20h5v1.5h-5v1.25h-5.5V21.5h-5V20h5zm1.5 1.5v1h2.5v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_05;
