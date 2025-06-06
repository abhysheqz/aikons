import React from "react";
const Unlink_03: React.FC<
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
        d="m8.5 15.5 7-7M15.218 12.263c1.075.698 1.34 1.351 2.983-.294l2.823-2.828c1.632-1.634.923-2.421 0-3.345L18.21 2.977c-.922-.923-1.707-1.635-3.34 0l-2.824 2.828c-1.645 1.647-1.043 1.922-.26 3.004M12.254 15.219c.697 1.073 1.376 1.31-.294 2.977l-2.822 2.818c-1.66 1.658-2.416.92-3.338 0l-2.813-2.81c-.922-.92-1.66-1.676 0-3.333l2.822-2.818c1.668-1.666 1.918-1.042 2.998-.26M21 16h-2m-3 5v-2M3 8h2m3-5v2"
      />
    </svg>
  );
};
export default Unlink_03;
