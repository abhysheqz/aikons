import React from "react";
const TropicalStormTracks_01: React.FC<
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
        strokeWidth={1.5}
        d="M12.075 15.058c1.67 0 3.023-1.349 3.023-3.013a3.02 3.02 0 0 0-3.023-3.014 3.02 3.02 0 0 0-3.022 3.014 3.02 3.02 0 0 0 3.022 3.013Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.326 2.202-3.01 3.148c6.02 1.87 7.416 8.524 7.79 11.838.01.093-.1.146-.168.082l-3.145-2.944c-1.934 6.041-8.508 7.255-11.905 7.703-.094.013-.15-.1-.084-.169l3.085-3.196C3.852 16.936 2.447 10.24 2.108 6.92c-.01-.093.102-.145.169-.08l3.11 2.98c1.968-6.142 8.537-7.418 11.857-7.786.093-.01.146.1.082.168Z"
      />
    </svg>
  );
};
export default TropicalStormTracks_01;
