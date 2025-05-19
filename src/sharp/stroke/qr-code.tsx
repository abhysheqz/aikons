import React from "react";
const QrCode: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.009 11.99h5.994M12 3.002v4.994"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.931 3.019H3.1a.1.1 0 0 0-.1.1V8.92a.1.1 0 0 0 .1.1H8.93a.1.1 0 0 0 .1-.1V3.118a.1.1 0 0 0-.1-.1ZM8.931 14.96H3.1a.1.1 0 0 0-.1.1v5.802a.1.1 0 0 0 .1.1H8.93a.1.1 0 0 0 .1-.1V15.06a.1.1 0 0 0-.1-.1ZM20.986 11.99h-8.908a.1.1 0 0 0-.1.1v2.895m.02 2.02v2.96M13.995 21h1.989m2.001-.024h2.901a.1.1 0 0 0 .1-.1v-5.793a.1.1 0 0 0-.1-.1h-2.893m-3.005 0v2.497h3.005v1.5M20.9 3.019H15.07a.1.1 0 0 0-.1.1v5.81a.1.1 0 0 0 .1.1H20.9a.1.1 0 0 0 .1-.1v-5.81a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default QrCode;
