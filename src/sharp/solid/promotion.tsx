import React from "react";
const Promotion: React.FC<
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
        d="M18.513 1.453a.75.75 0 0 0-.808-.142L8.25 5.363v8.274l9.455 4.052a.75.75 0 0 0 .808-.142C20.502 15.68 21.75 12.75 21.75 9.5s-1.248-6.18-3.237-8.047M6.75 13.25v-7.5h-4.5v7.5zM6.261 14.75l-.011 4.024 3.145 3.71a.75.75 0 0 0 1.1.05l3.033-3a.75.75 0 0 0-.114-1.16l-2.864-1.888-.143-.292-3.369-1.444z"
      />
    </svg>
  );
};
export default Promotion;
