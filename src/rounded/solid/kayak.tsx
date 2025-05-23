import React from "react";
const Kayak: React.FC<
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
        d="M20.942 2.445C15.706 1.554 10.792 3.8 7.34 7.418c-3.448 3.614-5.52 8.68-5.014 13.588a.75.75 0 0 0 .669.669c4.908.505 9.974-1.567 13.588-5.014 3.619-3.453 5.864-8.366 4.972-13.602a.75.75 0 0 0-.613-.614M7 16a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm9-9a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H17a1 1 0 0 1-1-1m-.988 1.988a2.52 2.52 0 0 0-3.561 0L8.988 11.45a2.518 2.518 0 1 0 3.561 3.561l2.463-2.463a2.52 2.52 0 0 0 0-3.561"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.537 5.123q.021-.204.018-.412A5.5 5.5 0 0 0 6.3 3.153c-.16-.5-.417-1.048-.822-1.428a1.7 1.7 0 0 0-.806-.44 1.63 1.63 0 0 0-.997.105 3 3 0 0 0-.663.417 7 7 0 0 0-.636.57 7 7 0 0 0-.569.635c-.158.201-.32.435-.417.664a1.63 1.63 0 0 0-.104.997c.072.327.241.595.439.805.38.405.927.663 1.428.822.515.163 1.073.25 1.558.255q.208.003.412-.018l12.34 12.342a4 4 0 0 0-.018.41c.005.484.092 1.043.255 1.558.16.5.417 1.048.822 1.428.21.198.479.367.806.44.334.072.673.031.997-.105.228-.097.462-.259.663-.417a7 7 0 0 0 .636-.57c.204-.204.402-.423.569-.635.158-.201.32-.435.416-.664.137-.323.178-.663.105-.997a1.7 1.7 0 0 0-.439-.805c-.38-.405-.927-.663-1.428-.822a5.5 5.5 0 0 0-1.558-.255 4 4 0 0 0-.414.018z"
      />
    </svg>
  );
};
export default Kayak;
