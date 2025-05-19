import React from "react";
const Fortress: React.FC<
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
        d="M21.18 21.982H23a1 1 0 1 0 0-2h-1.007V3.017a1.01 1.01 0 0 0-1.01-1.01h-1.986a1 1 0 0 0-.97.757l-.306 1.22h-.44l-.309-1.226a1 1 0 0 0-.97-.756h-2.009a1.01 1.01 0 0 0-1.01 1.019l.044 4.962h-2.022V3.012a1.01 1.01 0 0 0-1.01-1.01h-1.99a1 1 0 0 0-.972.761L6.73 4h-.445l-.306-1.238a1 1 0 0 0-.97-.76H3.03a1.01 1.01 0 0 0-1.01 1.01v16.97H1a1 1 0 1 0 0 2h1.867a1 1 0 0 0 .305 0H9a1 1 0 0 0 1-1v-2.997c0-1.102.894-1.997 2-1.997s2 .895 2 1.997v2.997a1 1 0 0 0 1 1h5.807a1 1 0 0 0 .373 0M5 9a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m12-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fortress;
