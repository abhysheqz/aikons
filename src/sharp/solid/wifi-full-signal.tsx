import React from "react";
const WifiFullSignal: React.FC<
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
        d="M12 2.25c-4.127 0-7.86 1.696-10.536 4.427a.75.75 0 0 0-.071.965l1.355 1.87a14.7 14.7 0 0 1 9.253-3.262 14.7 14.7 0 0 1 9.251 3.262l1.355-1.87a.75.75 0 0 0-.071-.965A14.7 14.7 0 0 0 12 2.25"
      />
      <path
        fill="currentColor"
        d="M20.37 10.728A13.2 13.2 0 0 0 12 7.75a13.2 13.2 0 0 0-8.37 2.979l1.577 2.176A14.7 14.7 0 0 1 12 11.25c2.45 0 4.76.598 6.793 1.654z"
      />
      <path
        fill="currentColor"
        d="M17.903 14.134A13.2 13.2 0 0 0 12 12.75c-2.122 0-4.126.498-5.903 1.384l1.926 2.658a14.8 14.8 0 0 1 3.977-.542c1.377 0 2.71.189 3.975.542zM15.03 18.098A13.3 13.3 0 0 0 12 17.75c-1.042 0-2.056.12-3.03.348l2.423 3.342a.75.75 0 0 0 1.214 0z"
      />
    </svg>
  );
};
export default WifiFullSignal;
