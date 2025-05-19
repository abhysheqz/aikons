import React from "react";
const WirelessCloudAccess: React.FC<
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
        d="M7.369 15.202c1.306-1.062 2.896-1.702 4.626-1.702 1.734 0 3.33.644 4.638 1.712l-1.265 1.55c-.994-.812-2.152-1.262-3.373-1.262-1.218 0-2.372.447-3.364 1.254zm1.929 2.442a5.1 5.1 0 0 1 2.697-.783c.985 0 1.906.29 2.708.79l-1.058 1.698a3.1 3.1 0 0 0-1.65-.488c-.58 0-1.135.168-1.643.483z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 6.865A5.752 5.752 0 0 0 7 18.25h.6l-2.342-3.265 1.163-.946C7.963 12.784 9.881 12 11.994 12c2.12 0 4.042.79 5.586 2.05l1.162.95-2.34 3.25H17.5a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.998 21.25c0-.552.446-1 .997-1H12c.55 0 .997.448.997 1s-.446 1-.997 1h-.006a1 1 0 0 1-.997-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WirelessCloudAccess;
