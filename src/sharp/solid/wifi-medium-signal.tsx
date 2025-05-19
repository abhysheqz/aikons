import React from "react";
const WifiMediumSignal: React.FC<
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
        d="M12 2.25c-4.127 0-7.86 1.696-10.536 4.427a.75.75 0 0 0-.071.965l3.814 5.263A14.7 14.7 0 0 1 12 11.25c2.45 0 4.76.598 6.793 1.654l3.813-5.262a.75.75 0 0 0-.071-.965A14.7 14.7 0 0 0 12 2.25"
      />
      <path
        fill="currentColor"
        d="M12 12.75c2.121 0 4.125.498 5.903 1.384l-1.927 2.658A14.8 14.8 0 0 0 12 16.25c-1.377 0-2.71.189-3.976.542l-1.926-2.658A13.2 13.2 0 0 1 12 12.75M12 17.75c1.043 0 2.057.12 3.03.348l-2.423 3.342a.75.75 0 0 1-1.214 0L8.97 18.098A13.3 13.3 0 0 1 12 17.75"
      />
    </svg>
  );
};
export default WifiMediumSignal;
