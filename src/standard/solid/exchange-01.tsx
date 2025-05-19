import React from "react";
const Exchange_01: React.FC<
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
        d="M19.424 9c-1.153-2.983-4.03-5.369-8.641-4.953a1 1 0 1 1-.18-1.992c5.538-.5 9.225 2.445 10.686 6.224 1.302 3.368.844 7.455-1.661 10.221h.87a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1V16a1 1 0 0 1 2 0v1.314c2.048-2.128 2.527-5.465 1.426-8.314M2.499 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.814c-2.055 2.123-2.526 5.44-1.419 8.28 1.16 2.973 4.042 5.362 8.635 4.997a1 1 0 1 1 .158 1.994c-5.507.438-9.19-2.503-10.656-6.264-1.311-3.36-.86-7.43 1.652-10.193h-.87a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Exchange_01;
