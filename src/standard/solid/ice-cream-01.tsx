import React from "react";
const IceCream_01: React.FC<
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
        d="M12 18a1 1 0 0 1 1 1v2h1.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2H11v-2a1 1 0 0 1 1-1M12 2.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-1.925-.415a2.25 2.25 0 0 1 3.85 0c1.947.53 3.593 1.835 4.66 3.573a9 9 0 0 1 1.15 2.945.75.75 0 0 1-1.47.294 7.6 7.6 0 0 0-.316-1.127 4.1 4.1 0 0 1-1.104 1.097c-1.24.823-3.015.961-5.44-.295-.13.03-.298.064-.49.093-.464.07-1.111.118-1.78.001-.673-.117-1.41-.41-1.98-1.058a3.3 3.3 0 0 1-.582-.963 7.5 7.5 0 0 0-.837 2.252.75.75 0 1 1-1.472-.293 8.8 8.8 0 0 1 2.189-4.31c.984-1.05 2.225-1.83 3.622-2.209"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.473 10.414a.75.75 0 0 1 .28.642c-.408 5.475-4.397 8.694-8.806 8.694-4.38 0-8.694-3.402-8.693-8.736a.75.75 0 0 1 .97-.717c1.88.577 5.355.962 7.723.962s5.959-.4 7.839-.976a.75.75 0 0 1 .687.131"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IceCream_01;
