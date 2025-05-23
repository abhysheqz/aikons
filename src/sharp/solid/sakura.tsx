import React from "react";
const Sakura: React.FC<
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
        d="m13.872 2.125-.518-.375L12 3.146 10.646 1.75l-.518.375c-.75.543-1.321 1.429-1.704 2.44a9.6 9.6 0 0 0-.561 2.543 9.2 9.2 0 0 0-2.441-.216c-1.06.054-2.091.32-2.837.877l-.505.376.897 1.737-1.727.868.19.603c.455 1.441 1.779 2.743 3.5 3.552-1.005 1.718-1.4 3.659-.915 5.137l.2.606 1.928-.331.28 1.931.637.002c1.695.005 3.565-1.1 4.93-2.826 1.365 1.726 3.235 2.83 4.93 2.826l.637-.002.28-1.931 1.928.33.2-.605c.486-1.478.09-3.42-.915-5.137 1.721-.81 3.045-2.11 3.5-3.552l.19-.603-1.727-.868.897-1.737-.505-.376c-.746-.557-1.777-.823-2.837-.877a9.2 9.2 0 0 0-2.437.215 9.5 9.5 0 0 0-.562-2.543c-.384-1.012-.958-1.896-1.707-2.44M12 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sakura;
