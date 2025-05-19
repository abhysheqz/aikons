import React from "react";
const TongueWinkRight: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.559 7.25a.75.75 0 0 0-1.09-1.03l-.006.007a5.512 5.512 0 0 0-.587.732c-.275.412-.626 1.066-.626 1.791a.75.75 0 0 0 1.35.45c.45-.6 1.35-.6 1.8 0a.75.75 0 1 0 1.2-.9 2.6 2.6 0 0 0-2.042-1.05M6.75 9c0-.69.558-1.25 1.246-1.25h.008c.688 0 1.246.56 1.246 1.25s-.558 1.25-1.246 1.25h-.008c-.688 0-1.246-.56-1.246-1.25m1.85 4.55a.75.75 0 1 0-1.2.9 5.8 5.8 0 0 0 1.85 1.6v1.45a2.75 2.75 0 0 0 5.5 0v-1.45a5.8 5.8 0 0 0 1.85-1.6.75.75 0 1 0-1.2-.9 4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7m2.15 3.95v-.886a5.8 5.8 0 0 0 2.5 0v.886a1.25 1.25 0 0 1-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TongueWinkRight;
