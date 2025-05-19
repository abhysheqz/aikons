import React from "react";
const MailOpen_01: React.FC<
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
        d="M12.386 1.857a.75.75 0 0 0-.772 0l-9.71 5.827 8.474 6.163L12 12.536l1.623 1.31 8.474-6.162zM22.75 9.064l-7.918 5.759 7.918 6.395zM21.64 22.25 12 14.464 2.36 22.25zM1.25 21.219l7.92-6.396-7.92-5.76z"
      />
    </svg>
  );
};
export default MailOpen_01;
