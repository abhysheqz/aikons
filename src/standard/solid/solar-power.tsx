import React from "react";
const SolarPower: React.FC<
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
        d="M8.969 10.125H5.705c-.74 0-1.4.465-1.648 1.161l-.835 2.34H8.19zm-6.283 5.001-.415 1.16a1.75 1.75 0 0 0 1.648 2.339h3.158l.779-3.499zm5.927 3.499h6.803l-.76-3.499H9.392zm8.338 0h3.13a1.75 1.75 0 0 0 1.649-2.339l-.415-1.16h-5.124zm3.828-4.999-.835-2.34a1.75 1.75 0 0 0-1.648-1.161h-3.191l.76 3.501zm-7.21-3.501h-3.063l-.78 3.501h4.604zM12 1.125a.75.75 0 0 1 .75.75v.509c.298.074.578.192.835.346l.36-.36a.75.75 0 0 1 1.06 1.06l-.36.36q.233.387.347.835h.508a.75.75 0 0 1 0 1.5h-.508a3 3 0 0 1-.347.835l.36.36a.75.75 0 1 1-1.06 1.06l-.36-.36a3 3 0 0 1-.835.346v.509a.75.75 0 0 1-1.5 0v-.509a3 3 0 0 1-.835-.346l-.36.36a.75.75 0 0 1-1.06-1.06l.36-.36a3 3 0 0 1-.346-.835H8.5a.75.75 0 0 1 0-1.5h.509c.074-.298.192-.578.346-.835l-.36-.36a.75.75 0 1 1 1.06-1.06l.36.36c.257-.154.537-.272.835-.346v-.509a.75.75 0 0 1 .75-.75m1.118 3.129a1.583 1.583 0 1 0-2.236 2.242 1.583 1.583 0 0 0 2.236-2.242"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M14 21.875v-4h-4v4z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 21.875a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarPower;
