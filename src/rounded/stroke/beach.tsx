import React from "react";
const Beach: React.FC<
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
        d="M2 15.75S3.795 15 7 15c5 0 9 3 15 3M2 21h20M12.594 3.228c-2.846.816-4.695 3.624-4.59 6.647.022.628.033.942.301 1.08.269.14.547-.057 1.104-.45l1.242-.878a.98.98 0 0 1 .63-.181l2.917.187 2.438-1.723a.98.98 0 0 1 .63-.18l1.522.097c.653.042.98.063 1.141-.188s.03-.523-.233-1.067c-1.31-2.702-4.24-4.165-7.102-3.344M14.5 9.5l2 7.5M12.286 3 12 2"
      />
    </svg>
  );
};
export default Beach;
