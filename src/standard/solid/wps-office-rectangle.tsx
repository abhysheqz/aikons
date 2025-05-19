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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM6 7.25a.75.75 0 0 0-.75.75v.5q0 .167.07.317l3.5 7.5a.75.75 0 0 0 .68.433h.4a.75.75 0 0 0 .674-.421L14.27 8.75h2.787l-2.766 5.927-.288-.59a.75.75 0 0 0-1.349.657l.773 1.585a.75.75 0 0 0 .674.421h.4a.75.75 0 0 0 .68-.433l3.5-7.5a.75.75 0 0 0 .07-.317V8a.75.75 0 0 0-.75-.75h-4.2a.75.75 0 0 0-.674.421L9.71 14.677 6.944 8.75h2.787l.282.579a.75.75 0 0 0 1.349-.658l-.488-1a.75.75 0 0 0-.674-.421z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WpsOfficeRectangle;
