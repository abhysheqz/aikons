import React from "react";
const WifiDisconnected_03: React.FC<
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
        d="M19.707 8.207 22 10.5l-1.414 1.414-2.293-2.293L16 11.914 14.586 10.5l2.293-2.293-2.293-2.293L16 4.5l2.293 2.293L20.586 4.5 22 5.914z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 4.5c-3.456 0-6.867 1.264-10 3.714l1.315 1.51C6.125 7.55 9.085 6.5 12 6.5zM15.041 16.207c-1.609-1.61-4.475-1.61-6.084 0l-1.315-1.51c2.37-2.262 6.344-2.262 8.714 0zM6.292 13.145l-1.314-1.51C7.105 9.903 9.562 9.021 12 9v2c-1.962.02-3.95.731-5.708 2.145M12 17.5a1 1 0 0 0 0 2h.012a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default WifiDisconnected_03;
