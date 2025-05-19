import React from "react";
const NThRootSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM8.354 6v.052Q8.593 6 8.854 6c1.502 0 2.5 1.345 2.5 2.714V10.5h-2V8.714a.84.84 0 0 0-.192-.553C9.056 8.04 8.945 8 8.854 8c-.092 0-.203.04-.308.16a.84.84 0 0 0-.192.554V10.5h-2V6zm5 3a1 1 0 0 0-.895.553l-2.605 5.21-1.106-2.21a1 1 0 0 0-1.602-.26l-1.5 1.5 1.415 1.414.519-.519 1.38 2.76a1 1 0 0 0 1.788 0L13.972 11h4.382V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NThRootSquare;
