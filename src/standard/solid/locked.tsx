import React from "react";
const Locked: React.FC<
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
        d="M1.5 4.5a3 3 0 0 1 3-3H8a1 1 0 0 1 0 2H4.5a1 1 0 0 0-1 1V8a1 1 0 0 1-2 0zm13.5-2a1 1 0 0 1 1-1h3.5a3 3 0 0 1 3 3V8a1 1 0 1 1-2 0V4.5a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1M2.5 15a1 1 0 0 1 1 1v3.5a1 1 0 0 0 1 1H8a1 1 0 1 1 0 2H4.5a3 3 0 0 1-3-3V16a1 1 0 0 1 1-1m19 0a1 1 0 0 1 1 1v3.5a3 3 0 0 1-3 3H16a1 1 0 1 1 0-2h3.5a1 1 0 0 0 1-1V16a1 1 0 0 1 1-1M12 8c-.737 0-1.286.574-1.286 1.222V10h2.572v-.778C13.286 8.574 12.736 8 12 8m3.286 2v-.778C15.286 7.416 13.788 6 12 6S8.714 7.416 8.714 9.222V10H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Locked;
