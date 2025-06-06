import React from "react";
const LaptopCloud: React.FC<
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
        d="M21.817 17.25H2.182L.91 19.393l-.022.04c-.446.864.22 1.817 1.127 1.817h19.969c.906 0 1.572-.953 1.127-1.817l-.022-.04zM15.553 2.75c1.133 0 2.058 0 2.79.099.763.102 1.426.324 1.954.853.53.529.751 1.191.854 1.955.098.731.099 1.657.099 2.79v7.303H2.75V8.446c0-1.132 0-2.058.098-2.789.103-.764.325-1.426.854-1.955s1.19-.75 1.955-.853c.73-.099 1.656-.099 2.789-.099zM12 6.25c-1.242 0-2.25 1.075-2.25 2.4h-.562c-.932 0-1.687.806-1.687 1.8s.755 1.8 1.687 1.8h5.625c.932 0 1.687-.806 1.688-1.8s-.756-1.8-1.688-1.8h-.562c0-1.325-1.008-2.4-2.25-2.4"
      />
    </svg>
  );
};
export default LaptopCloud;
