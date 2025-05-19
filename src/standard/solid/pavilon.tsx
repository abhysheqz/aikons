import React from "react";
const Pavilon: React.FC<
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
        d="M2.25 21.5a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.75 21.5V13.08a6.4 6.4 0 0 0 2.412.469h9.676c.845 0 1.66-.165 2.412-.469V21.5a.75.75 0 0 1-.75.75h-3.98l.055-.004a.75.75 0 0 0 .671-.82l-.41-4.1a1.75 1.75 0 0 0-1.74-1.576h-2.191a1.75 1.75 0 0 0-1.741 1.576l-.41 4.1a.75.75 0 0 0 .726.824H5.5a.75.75 0 0 1-.75-.75m4.772.75h4.956a.75.75 0 0 1-.724-.675l-.41-4.1a.25.25 0 0 0-.249-.225h-2.19a.25.25 0 0 0-.249.225l-.41 4.1a.75.75 0 0 1-.724.675M12 1.75a.75.75 0 0 1 .735.603C13.161 4.48 15.835 7.75 21 7.75a.75.75 0 0 1 .712.987 5.14 5.14 0 0 1-4.874 3.513H7.162a5.14 5.14 0 0 1-4.874-3.513A.75.75 0 0 1 3 7.75c5.165 0 7.839-3.27 8.265-5.397A.75.75 0 0 1 12 1.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pavilon;
