import React from "react";
const WpsOfficeRectangle: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7.669 5H5.25v1.416l3.772 8.084h1.347l3.9-8h2.787l-2.766 5.927-.288-.59-1.349.657.978 2.006h1.347l3.772-8.084V7.25h-5.419l-3.62 7.427L6.943 8.75h2.787l.282.579 1.349-.658z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WpsOfficeRectangle;
