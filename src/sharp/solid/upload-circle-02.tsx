import React from "react";
const UploadCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.75 11.186v4.439h-1.5v-4.44l-1.281 1.026-.938-1.172L12 9.915l2.969 2.374-.937 1.172zM15 7.124v1.5H9v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UploadCircle_02;
