import React from "react";
const ShoppingCartCheck_01: React.FC<
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
        d="M1.5 2a1 1 0 0 1 1-1h.938a3 3 0 0 1 2.91 2.272l.005.019.465 2.213h1.198c.238 0 .388.27.31.494a2.3 2.3 0 0 0 1.59 2.978c.098.1.29.331.527.804a2.3 2.3 0 0 0 3.99.219 26.748 26.748 0 0 1 1.775-2.4c.528-.633 1.105-1.255 1.68-1.76q.095-.085.192-.182l.073-.072a.3.3 0 0 1 .203-.08h1.662c.358.006.74.024 1.083.115.382.1.76.302 1.04.688.345.474.38 1.003.35 1.447-.028.412-.129.911-.238 1.454l-.012.058c-.402 2-.809 3.955-1.782 5.375a5 5 0 0 1-2.06 1.76c-.876.407-1.913.599-3.136.599H8.43c-.583.017-1.116.411-1.33.999H17.5a2.25 2.25 0 1 1-2.236 2h-2.528q.015.123.014.25A2.25 2.25 0 1 1 8.264 20H6.41C5.594 20 5 19.322 5 18.571c0-1.352.74-2.559 1.854-3.163L4.404 3.742A1 1 0 0 0 3.439 3H2.5a1 1 0 0 1-1-1m9 17.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m6.25.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m2.084-16.557a1 1 0 0 0-.668-1.885c-.878.31-1.717.904-2.454 1.55-.747.655-1.445 1.415-2.039 2.127-.439.526-.827 1.034-1.143 1.465a4 4 0 0 0-.85-.782 2.6 2.6 0 0 0-.733-.348 2 2 0 0 0-.371-.067l-.063-.002H10.5a1 1 0 0 0-.094 1.995.7.7 0 0 1 .164.086c.2.133.595.484 1.036 1.365a1 1 0 0 0 1.738.09 24 24 0 0 1 .513-.757c.332-.469.8-1.103 1.352-1.764.554-.664 1.179-1.34 1.822-1.905.653-.572 1.27-.98 1.803-1.168"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheck_01;
