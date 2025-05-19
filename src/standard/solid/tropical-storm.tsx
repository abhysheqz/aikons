import React from "react";
const TropicalStorm: React.FC<
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
        d="M20.244 3.496c-2.994-.752-6.954-.703-10.21.52C6.74 5.255 4 7.785 4 12c0 1.97.707 3.776 1.88 5.173l-2.412 1.514a1 1 0 0 0 .288 1.817c2.994.752 6.954.703 10.21-.52C17.26 18.745 20 16.215 20 12c0-1.97-.707-3.776-1.88-5.173l2.412-1.514a1 1 0 0 0-.288-1.817M12.039 8.25A3.76 3.76 0 0 0 8.273 12c0 2.075 1.69 3.75 3.766 3.75A3.76 3.76 0 0 0 15.804 12c0-2.074-1.69-3.75-3.765-3.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TropicalStorm;
