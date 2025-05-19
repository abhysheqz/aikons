import React from "react";
const Ethereum: React.FC<
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
        d="M12.323 1.32a.75.75 0 0 0-1.229 0l-6.507 9.296 7.12 2.826 7.102-2.856z"
      />
      <path
        fill="currentColor"
        d="m19.43 11.954-7.442 2.992a.75.75 0 0 1-.556.001L4 11.997a.8.8 0 0 0 .094.183l7 10a.75.75 0 0 0 1.229 0l7-10a.8.8 0 0 0 .107-.226"
      />
    </svg>
  );
};
export default Ethereum;
