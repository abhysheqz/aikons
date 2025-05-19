import React from "react";
const Plaza: React.FC<
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
        d="M2.5 20.75a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.106 7.303a1 1 0 0 1 1.341-.447l4.895 2.447q.016.007.033.017c.24.12.483.24.68.366.227.144.465.336.646.63.182.295.248.594.275.86.024.233.024.505.024.773v8.801a1 1 0 1 1-2 0v-8.764a7 7 0 0 0-.014-.61l-.004-.002a7 7 0 0 0-.535-.282l-4.894-2.448a1 1 0 0 1-.447-1.341"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.18 2.482c-.524-.337-1.084-.25-1.547-.093-.438.149-.967.423-1.57.737l-4.08 2.117a8 8 0 0 0-.665.371c-.209.138-.411.31-.563.566a1.8 1.8 0 0 0-.233.763 8 8 0 0 0-.022.778V21c0 .414.336.75.75.75h8A.75.75 0 0 0 14 21V5.62c0-.706 0-1.315-.067-1.783-.07-.485-.237-1.025-.752-1.355M8.75 8.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plaza;
