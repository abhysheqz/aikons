import React from "react";
const MailUpload_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h12v-1.25a2.5 2.5 0 0 1-1.768-4.268l2.5-2.5a2.5 2.5 0 0 1 3.536 0l2.482 2.483V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0zM19.25 16.457v4.293a1 1 0 1 1-2 0v-4.293h-1.793c-.265 0-.543-.097-.64-.344a1 1 0 0 1 .226-1.07l2.5-2.5a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 .225 1.07c-.096.247-.374.344-.64.344z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailUpload_02;
