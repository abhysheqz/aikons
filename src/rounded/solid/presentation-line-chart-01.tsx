import React from "react";
const PresentationLineChart_01: React.FC<
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
        d="M11 20.765V22a1 1 0 1 0 2 0v-1.233l3.484 2.09a1 1 0 0 0 1.029-1.715L13 18.435V17h-2v1.433l-4.516 2.71a1 1 0 0 0 1.029 1.715z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 7.6c0-3.111 0-4.667.948-5.633S5.172 1 8.224 1h7.552c3.052 0 4.578 0 5.526.967.948.966.948 2.522.948 5.633v3.3c0 3.111 0 4.667-.948 5.634-.948.966-2.474.966-5.526.966H8.224c-3.052 0-4.578 0-5.526-.966-.948-.967-.948-2.523-.948-5.634zm8.53 1.401c-.241-.014-.537.086-.788.415l-.696.915a1 1 0 0 1-1.591-1.212l.696-.915C8.53 7.38 9.45 6.95 10.4 7.004c.946.057 1.811.59 2.357 1.469.223.36.513.502.752.524.235.021.519-.064.769-.36l.96-1.134a1 1 0 0 1 1.526 1.292l-.96 1.134c-.647.765-1.555 1.143-2.475 1.06-.916-.083-1.745-.613-2.272-1.462-.231-.373-.53-.511-.776-.526"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationLineChart_01;
