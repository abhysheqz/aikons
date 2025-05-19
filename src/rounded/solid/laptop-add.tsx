import React from "react";
const LaptopAdd: React.FC<
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
        d="M21.818 17.25H2.183L.91 19.393l-.021.04c-.446.864.22 1.817 1.127 1.817h19.968c.907 0 1.573-.953 1.128-1.817l-.022-.04zM15.554 2.75c1.132 0 2.058 0 2.789.099.764.102 1.426.324 1.955.853s.75 1.191.854 1.955c.098.731.098 1.657.098 2.79v7.303H2.75V8.446c0-1.132 0-2.058.099-2.789.102-.764.325-1.426.853-1.955.529-.529 1.191-.75 1.955-.853.731-.099 1.657-.099 2.79-.099zM12 5.75a1 1 0 0 0-1 1v1.5H9.5a1 1 0 0 0 0 2H11v1.5a1 1 0 1 0 2 0v-1.5h1.5a1 1 0 1 0 0-2H13v-1.5a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
export default LaptopAdd;
