import React from "react";
const Uv_01: React.FC<
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
        d="M12 2.25c.259 0 .5.134.637.354l1.955 3.14 3.602-.838a.75.75 0 0 1 .9.9l-.837 3.602 3.14 1.955a.75.75 0 0 1 0 1.274l-3.14 1.955.837 3.602a.75.75 0 0 1-.9.9l-3.602-.837-1.955 3.14a.75.75 0 0 1-1.274 0l-1.955-3.14-3.602.837a.75.75 0 0 1-.9-.9l.837-3.602-3.14-1.955a.75.75 0 0 1 0-1.274l3.14-1.955-.837-3.602a.75.75 0 0 1 .9-.9l3.602.837 1.955-3.14A.75.75 0 0 1 12 2.25"
      />
    </svg>
  );
};
export default Uv_01;
