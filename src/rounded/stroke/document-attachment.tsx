import React from "react";
const DocumentAttachment: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 10.5V10c0-3.771 0-5.657-1.172-6.828S16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172S3.5 6.229 3.5 10v4.5c0 3.287 0 4.931.908 6.038q.25.304.554.554C6.07 22 7.712 22 11 22M7.5 7h9M7.5 12h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 20v-3c0-1.43-1.343-3-3-3s-3 1.57-3 3v3.5a1.5 1.5 0 0 0 3 0V17"
      />
    </svg>
  );
};
export default DocumentAttachment;
