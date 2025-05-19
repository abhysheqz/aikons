import React from "react";
const MailDownload_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h9.834a2.5 2.5 0 0 1 2.166-3.75v-2.5a2.5 2.5 0 0 1 5 0v2.5c.632 0 1.264.238 1.75.715V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0zM19.25 13.25a1 1 0 1 0-2 0v4.293h-1.793c-.265 0-.543.097-.64.344a1 1 0 0 0 .226 1.07l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 0 0 .225-1.07c-.096-.247-.374-.344-.64-.344H19.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailDownload_02;
