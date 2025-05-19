import React from "react";
const GiveBlood: React.FC<
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
        d="M12.041 1.754a1.6 1.6 0 0 1 1.918 0c.567.421 1.496 1.184 2.29 2.189.788.997 1.501 2.307 1.501 3.807 0 2.718-2.085 5-4.75 5s-4.75-2.282-4.75-5c0-1.5.713-2.81 1.501-3.807.794-1.005 1.723-1.768 2.29-2.189"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 13.25a.75.75 0 0 0-.75.75v6.02c0 .335.223.63.546.722l6.254 1.769a2.75 2.75 0 0 0 1.978-.187l7.585-3.792a1.627 1.627 0 0 0 .783-2.06 2.75 2.75 0 0 0-3.423-1.587l-2.423.808c.223.494.33.998.33 1.43a.65.65 0 0 1-.45.618l-3.914 1.275a1.65 1.65 0 0 1-1.032-.004l-2.688-.896a.65.65 0 1 1 .411-1.233l2.688.896a.35.35 0 0 0 .219 0l3.407-1.109a2.5 2.5 0 0 0-.246-.624 3.27 3.27 0 0 0-1.57-1.209 3.5 3.5 0 0 0-1.205-.212h-.807l-1.881-1.034a2.75 2.75 0 0 0-1.326-.341z"
      />
    </svg>
  );
};
export default GiveBlood;
