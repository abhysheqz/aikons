import React from "react";
const Beta: React.FC<
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
        d="M12.883 10.2c2.252 0 4.078-1.612 4.078-3.6S15.135 3 12.883 3 8.805 4.612 8.805 6.6v12.6c0 .994-.913 1.8-2.039 1.8-.755 0-1.413-.362-1.766-.9m3.805-5.4c0 2.485 2.282 4.5 5.098 4.5S19 17.185 19 14.7s-2.282-4.613-5.097-4.613"
      />
    </svg>
  );
};
export default Beta;
