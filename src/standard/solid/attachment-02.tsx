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
        d="M12 3a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0V6a5 5 0 0 1 10 0v12a5 5 0 0 1-10 0v-4.5a3.5 3.5 0 1 1 7 0V16a1 1 0 1 1-2 0v-2.5a1.5 1.5 0 0 0-3 0V18a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Attachment_02;
