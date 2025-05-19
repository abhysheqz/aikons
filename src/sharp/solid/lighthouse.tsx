import React from "react";
const Lighthouse: React.FC<
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
        d="m20 7.728-2 .5-.364-1.456 2-.5zm-.364 4-2-.5L18 9.772l2 .5zM4.364 6.272l2 .5L6 8.228l-2-.5zm-.364 4 2-.5.364 1.456-2 .5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 8.75h8v-1.5h-.47q.135-.21.252-.427c.367-.681.656-1.567.32-2.503a1.9 1.9 0 0 0-.383-.601 5 5 0 0 0-.508-.474c-.367-.3-.81-.602-1.227-.865a26 26 0 0 0-1.129-.67c-.151-.085-.767-.412-.855-.46-.088.048-.703.375-.854.46-.302.169-.71.405-1.13.67-.416.263-.86.565-1.227.865-.183.15-.36.31-.508.474-.14.154-.296.36-.383.601-.336.936-.046 1.822.32 2.503q.118.216.254.427H8zM5 22.75h14v-1.5h-1.284l-.463-2.5H6.746l-.463 2.5H5zM7.672 13.75h8.655l.649 3.5H7.024zM8.32 10.25h7.36l.37 2h-8.1z"
      />
    </svg>
  );
};
export default Lighthouse;
