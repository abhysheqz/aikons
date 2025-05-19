import React from "react";
const Punch: React.FC<
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
        d="M6.364 3.25c-2.272 0-4.114 1.87-4.114 4.175v6.614a1.634 1.634 0 0 0 3.269 0v-2.182h.789v3.707a1.634 1.634 0 0 0 3.269 0v-3.707h.789v4.618a1.634 1.634 0 0 0 3.268 0v-4.618h.79v3.707a1.634 1.634 0 0 0 3.268 0v-3.707h.79v3.707c0 1.35-1.09 2.435-2.424 2.435h-.761c-.563 0-.879.236-1.076.573-.216.367-.305.884-.305 1.435 0 .452.357.743 1.378.743.975-.015 1.72-.057 2.127-.158a5.7 5.7 0 0 0 4.164-4.173c.162-.66.165-1.471.165-3.241V7.425c0-2.306-1.842-4.175-4.114-4.175z"
      />
    </svg>
  );
};
export default Punch;
