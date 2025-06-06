import React from "react";
const Bug_01: React.FC<
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
        d="M8.588 5.676A3.42 3.42 0 0 1 12 2.25a3.42 3.42 0 0 1 3.412 3.426v.272q.176.044.35.11a4.5 4.5 0 0 1 1.99 1.477A2.1 2.1 0 0 0 19.8 5.43v-.245h1.95v.245a4.06 4.06 0 0 1-3.173 3.967q.053.319.072.666c.03.478.03 1.063.03 1.782v.094h2.096v1.957h-2.096v1.223q0 .725-.147 1.406a4.5 4.5 0 0 1 3.218 4.32H19.8a2.544 2.544 0 0 0-1.956-2.478A6.69 6.69 0 0 1 13 21.75v-5.195h-2v5.195a6.69 6.69 0 0 1-4.844-3.382A2.544 2.544 0 0 0 4.2 20.846H2.25a4.5 4.5 0 0 1 3.218-4.32 6.8 6.8 0 0 1-.147-1.406v-1.223H3.225V11.94h2.096v-.094c0-.72 0-1.304.03-1.782q.02-.347.072-.666A4.06 4.06 0 0 1 2.25 5.43v-.245H4.2v.245a2.1 2.1 0 0 0 2.048 2.104 4.5 4.5 0 0 1 1.99-1.478q.173-.064.35-.11zm4.874.1v-.1c0-.811-.655-1.468-1.462-1.468-.808 0-1.463.657-1.463 1.468v.1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bug_01;
