import React from "react";
const Location_10: React.FC<
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
        d="M12 1.25c-4.478 0-8.25 3.769-8.25 8.337 0 4.68 3.858 7.808 7.077 9.84l.013.009.013.007a2.3 2.3 0 0 0 2.294 0l.011-.007.012-.007c3.232-2.017 7.08-5.178 7.08-9.842 0-4.568-3.772-8.337-8.25-8.337M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 18.75a1 1 0 0 1 .996.908 1 1 0 0 0 .094.085c.179.14.499.311.984.473.958.32 2.347.534 3.926.534s2.967-.215 3.926-.535c.485-.161.805-.331.984-.472a1 1 0 0 0 .094-.085A1 1 0 0 1 19 19.75c0 .714-.435 1.235-.852 1.564-.43.338-.988.599-1.59.799-1.212.404-2.824.637-4.558.637s-3.346-.233-4.559-.637c-.601-.2-1.16-.461-1.588-.8-.418-.328-.853-.85-.853-1.563a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default Location_10;
