import React from "react";
const Asterisk_02: React.FC<
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
        d="M12 3a1 1 0 0 1 1 1v6.277l5.504-3.145a1 1 0 1 1 .992 1.736L14.016 12l5.48 3.132a1 1 0 1 1-.992 1.736L13 13.723V20a1 1 0 1 1-2 0v-6.277l-5.504 3.145a1 1 0 1 1-.992-1.736L9.984 12l-5.48-3.132a1 1 0 0 1 .992-1.736L11 10.277V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Asterisk_02;
