import React from "react";
const TongueWinkLeft: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9 7.5l-.624.416.001.001.006.01a4 4 0 0 1 .13.209c.06.1.135.228.213.373A2.61 2.61 0 0 0 6.4 9.55l1.2.9c.45-.6 1.35-.6 1.8 0a.75.75 0 0 0 1.35-.45c0-.69-.326-1.454-.579-1.96a10 10 0 0 0-.531-.932l-.01-.016-.004-.005-.001-.002zM14.75 9c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25m.65 4.55a4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7l-1.2.9a5.8 5.8 0 0 0 1.85 1.6v1.45a2.75 2.75 0 1 0 5.5 0v-1.45a5.8 5.8 0 0 0 1.85-1.6zm-4.65 3.95v-.886a5.8 5.8 0 0 0 2.5 0v.886a1.25 1.25 0 0 1-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TongueWinkLeft;
