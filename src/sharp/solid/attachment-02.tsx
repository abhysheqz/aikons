import React from "react";
const Attachment_02: React.FC<
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
        d="M12 3.5a3 3 0 0 0-3 3v1H7v-1a5 5 0 0 1 10 0v11a5 5 0 0 1-10 0V13a3.5 3.5 0 1 1 7 0v2.5h-2V13a1.5 1.5 0 0 0-3 0v4.5a3 3 0 1 0 6 0v-11a3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Attachment_02;
