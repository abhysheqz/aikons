import React from "react";
const Vaccine: React.FC<
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
        d="M14.03 17.47a.75.75 0 1 0-1.06 1.06zM14.5 19l-.53.53a.75.75 0 0 0 1.06 0zm2.53-1.47a.75.75 0 1 0-1.06-1.06zm2.72.47A4.75 4.75 0 0 0 15 13.25v1.5A3.25 3.25 0 0 1 18.25 18zM15 13.25A4.75 4.75 0 0 0 10.25 18h1.5A3.25 3.25 0 0 1 15 14.75zM10.25 18A4.75 4.75 0 0 0 15 22.75v-1.5A3.25 3.25 0 0 1 11.75 18zM15 22.75A4.75 4.75 0 0 0 19.75 18h-1.5A3.25 3.25 0 0 1 15 21.25zm-2.03-4.22 1 1 1.06-1.06-1-1zm2.06 1 2-2-1.06-1.06-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2.5 21 2.447-2.433m0 0 .997.966 2.401-1.476a.01.01 0 0 0 .002-.016L5.56 15.332m-.614 3.235-.997-.983a.01.01 0 0 1 0-.012l1.61-2.24m0 0L4.47 14.19a.01.01 0 0 1 0-.014l7.284-7.317m0 0-.957-.978m.957.978 1.205 1.205m3.207 3.182-.729-.737m0 0 3.819-4.688m-3.819 4.688-2.478-2.445m6.297-2.243c.665.665.81 1.038 2.244 1.038m-2.244-1.038-1.517-1.557m-4.78 3.8 4.78-3.8m0 0c-.582-.665-1.06-.54-1.06-2.264"
      />
    </svg>
  );
};
export default Vaccine;
