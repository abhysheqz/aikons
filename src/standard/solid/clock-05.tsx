import React from "react";
const Clock_05: React.FC<
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
        d="M1 12C1 5.925 5.925 1 12 1c4.076 0 7.601 2.217 9.49 5.501.397.69.721 1.426.964 2.2A1 1 0 0 1 21.5 10H19a1 1 0 0 1-.776-1.63l1.173-1.446A8.91 8.91 0 0 0 12 3a9 9 0 0 0 0 18 1 1 0 0 1 0 2C5.925 23 1 18.075 1 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a1 1 0 0 1 1 1v3.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1M22 11a1 1 0 0 1 1 1q0 .55-.049 1.09a1 1 0 0 1-1.992-.18Q21 12.46 21 12a1 1 0 0 1 1-1m-.342 3.91a1 1 0 0 1 .583 1.289 12 12 0 0 1-.562 1.262 1 1 0 0 1-1.776-.922q.262-.504.466-1.045a1 1 0 0 1 1.289-.584m-1.809 3.664a1 1 0 0 1 .053 1.413q-.503.543-1.072 1.013a1 1 0 1 1-1.275-1.541q.466-.386.881-.833a1 1 0 0 1 1.413-.052m-2.94 2.617a1 1 0 0 1-.492 1.326q-.538.247-1.104.433a1 1 0 0 1-.625-1.9q.46-.15.896-.352a1 1 0 0 1 1.326.493"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_05;
