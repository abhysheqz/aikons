import React from "react";
const Ranking: React.FC<
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
        d="M7.964 16.028C7.774 16.002 7.5 16 7 16h-.5c-.735 0-1.186.002-1.513.046-.287.039-.334.093-.34.1h-.001c-.007.007-.061.055-.1.341-.044.327-.046.778-.046 1.513v3H8v-4c0-.5-.002-.774-.028-.964v-.007zm.267-1.982c.383.051.82.177 1.183.54s.489.8.54 1.184c.046.34.046.752.046 1.176V22a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v-4.062c0-.654 0-1.241.064-1.717.07-.52.232-1.052.668-1.489.437-.436.97-.598 1.489-.668C5.197 14 5.784 14 6.438 14h.6160000000000001c.424 0 .837 0 1.177.046M16.946 16h.6160000000000001c.654 0 1.241 0 1.717.064.52.07 1.052.232 1.489.668.436.437.598.97.668 1.489.064.476.064 1.063.064 1.717V22a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1v-3.054c0-.425 0-.837.046-1.177.051-.383.177-.82.54-1.183s.8-.489 1.184-.54c.34-.046.752-.046 1.176-.046m-.917 2.029-.001.007c-.026.19-.028.464-.028.964v2h3.5v-1c0-.735-.002-1.186-.046-1.513-.039-.286-.093-.334-.1-.34v-.001c-.007-.007-.055-.061-.341-.1-.327-.044-.778-.046-1.513-.046H17c-.5 0-.774.002-.964.028z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 12h-.062c-.654 0-1.241 0-1.717.064-.52.07-1.052.232-1.489.668-.436.437-.598.97-.668 1.489C8 14.697 8 15.284 8 15.938V22a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6.062c0-.654 0-1.241-.064-1.717-.07-.52-.232-1.052-.668-1.489-.437-.436-.97-.598-1.489-.668C13.303 12 12.716 12 12.062 12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.998 1.25c.672 0 1.122.503 1.365.995l.696 1.403.006.006a.2.2 0 0 0 .034.026l.008.004 1.256.21c.54.091 1.128.381 1.326 1.004s-.111 1.2-.499 1.588l-.001.001-.976.984a.2.2 0 0 0-.019.07l.28 1.217c.126.551.138 1.317-.457 1.754-.598.44-1.326.193-1.81-.096l-1.178-.702-.007-.002a.2.2 0 0 0-.055.002l-1.175.702c-.487.29-1.214.534-1.81.095-.594-.437-.585-1.2-.458-1.754l.28-1.217a.2.2 0 0 0-.02-.07l-.977-.985c-.386-.388-.695-.964-.498-1.585.198-.624.785-.914 1.326-1.005l1.25-.21.008-.004a.2.2 0 0 0 .035-.026l.006-.006.697-1.405c.245-.492.696-.994 1.367-.994"
      />
    </svg>
  );
};
export default Ranking;
