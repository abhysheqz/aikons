import React from "react";
const WifiLowSignal: React.FC<
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
        d="M12 2.25c-4.127 0-7.86 1.696-10.536 4.427a.75.75 0 0 0-.071.965l6.631 9.15a14.8 14.8 0 0 1 3.977-.542c1.377 0 2.71.189 3.975.542l6.631-9.15a.75.75 0 0 0-.071-.965A14.7 14.7 0 0 0 12 2.25M12 17.75c1.043 0 2.057.12 3.03.348l-2.423 3.342a.75.75 0 0 1-1.214 0L8.97 18.098A13.3 13.3 0 0 1 12 17.75"
      />
    </svg>
  );
};
export default WifiLowSignal;
