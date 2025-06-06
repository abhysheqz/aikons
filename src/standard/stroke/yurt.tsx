import React from "react";
const Yurt: React.FC<
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
        d="M20.314 8H3.686c-.392 0-.56-.326-.632-.606-.064-.248.043-.498.222-.681C6.32 3.606 9.593 2 12 2c2.224 0 5.668 1.583 8.726 4.714.178.182.284.431.22.678-.071.28-.24.608-.632.608M9 22v-9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9M4 8s-1 3-1 7 1 7 1 7M20 8s1 3 1 7-1 7-1 7M3 22h18M3 15h6M15 15h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.009 15H12"
      />
    </svg>
  );
};
export default Yurt;
