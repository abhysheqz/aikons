import React from "react";
const NThRootCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.354 6v.052Q9.593 6 9.854 6c1.502 0 2.5 1.345 2.5 2.714V10.5h-2V8.714a.84.84 0 0 0-.192-.553C10.056 8.04 9.945 8 9.854 8c-.092 0-.203.04-.308.16a.84.84 0 0 0-.192.554V10.5h-2V6zm5 3a1 1 0 0 0-.895.553l-2.605 5.21-1.106-2.21a1 1 0 0 0-1.602-.26l-1.5 1.5 1.415 1.414.519-.519 1.38 2.76a1 1 0 0 0 1.788 0L14.972 11h4.382V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NThRootCircle;
