import React from "react";
const Dropper: React.FC<
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
        d="m21.56 8.18-1.975 1.974 1.013 1.013-1.363 1.363-1.694-1.694-6.072-6.073 1.362-1.362 1.013 1.013 1.975-1.975a4.06 4.06 0 0 1 5.74 5.74M11.282 6.47l1.378 1.378-7.51 7.51v3.493h3.494l1.429-1.427-.982-.982 1.378-1.379.982.982 1.649-1.649-.982-.981 1.378-1.378.982.981 1.676-1.676 1.378 1.378-8.08 8.08H6.11l-1.347 1.347a2.057 2.057 0 0 1-2.909-2.908l1.347-1.348v-3.34z"
      />
    </svg>
  );
};
export default Dropper;
