import React from "react";
const Slide: React.FC<
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
        d="M12.131 4.595a.75.75 0 0 0-1.262.81l.543.845H7.695L6.631 4.595a.75.75 0 0 0-1.352.2L2.283 15.277l-.008.03-.996 3.486a.75.75 0 1 0 1.442.412l.845-2.956h3.461l-.746 2.539a.75.75 0 1 0 1.439.423l2.048-6.964 4.01 6.24a2.75 2.75 0 0 0 2.314 1.262H22a.75.75 0 0 0 0-1.5c-.68 0-1.313-.346-1.68-.917zm-3.436 5.984L6.265 6.8l-1.128 3.95h3.508zM4.71 12.25l-.715 2.5h3.474l.736-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Slide;
