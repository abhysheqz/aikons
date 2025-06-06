import React from "react";
const Move_01: React.FC<
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
        d="M19.639 2.114a.75.75 0 0 1-.466 1.283h-.423V5h1.603v-.423a.75.75 0 0 1 1.283-.466l.457.466c.134.137.283.288.391.433.128.17.266.416.266.74s-.138.57-.266.74a5 5 0 0 1-.391.433l-.457.466a.75.75 0 0 1-1.283-.466V6.5H18.75v1.603h.423a.75.75 0 0 1 .466 1.283l-.466.457c-.137.134-.288.283-.433.39a1.22 1.22 0 0 1-.74.267c-.324 0-.569-.138-.74-.266-.145-.108-.296-.257-.433-.391l-.466-.457a.75.75 0 0 1 .466-1.283h.423V6.5h-1.603v.423a.75.75 0 0 1-1.283.466l-.433-.442a5 5 0 0 1-.415-.457 1.22 1.22 0 0 1-.266-.74c0-.324.138-.57.266-.74.109-.145.28-.32.415-.457l.433-.442a.75.75 0 0 1 1.283.466V5h1.603V3.395h-.447a.75.75 0 0 1-.442-1.28l.466-.458c.137-.134.288-.282.433-.39A1.22 1.22 0 0 1 18 1c.324 0 .57.138.74.266.145.109.296.257.433.391z"
      />
      <path
        fill="currentColor"
        d="M6.25 4a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.57.638 6.603 2.685.936.942.992 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12-.12.213-.6 1.107-.702 1.31-.217.433-.331.777-.331 1.059 0 .265 0 .536-.017.74-.018.219-.06.459-.185.695a1.75 1.75 0 0 1-.732.73 1.8 1.8 0 0 1-.694.186C14.81 23 14.566 23 14.3 23H8.717c-.308 0-.592 0-.828-.023-.256-.026-.72-.127-.981-.389-.27-.227-.42-.56-.525-.832a19 19 0 0 1-.378-1.14c-.11-.308-.345-.698-.944-1.49l-3.277-4.33a2.53 2.53 0 0 1-.007-3.1 2.4 2.4 0 0 1 3.503-.337l.97 1.015z"
      />
    </svg>
  );
};
export default Move_01;
