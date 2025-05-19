import React from "react";
const Tips: React.FC<
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
        d="M12.25 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M13.827 15.69l4.571-1.575c.8-.28 1.67.05 2.176.837.321.5.186 1.21-.272 1.506l-8.485 5.493c-.473.306-1.03.38-1.549.208L3.934 20.05a1 1 0 0 1-.684-.949V13.75a1 1 0 0 1 1-1H5.67c.29 0 .576.073.834.214l2.305 1.251a2.26 2.26 0 0 0 1.08.277h1.177c.943 0 1.7.786 1.774 1.766v.134l-2.73.847a1.74 1.74 0 0 1-1.341-.13l-2.33-1.48a.5.5 0 1 0-.536.844l2.345 1.49.03.017a2.74 2.74 0 0 0 2.129.214l2.868-.89a.92.92 0 0 0 .634-.89q0-.341-.066-.66a1 1 0 0 0-.017-.063"
      />
      <path
        fill="currentColor"
        d="M14.416 2.908a5.5 5.5 0 0 0-2.937 7.342 4.25 4.25 0 1 1 2.937-7.342"
      />
    </svg>
  );
};
export default Tips;
