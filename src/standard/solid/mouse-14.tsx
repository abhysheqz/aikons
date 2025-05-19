import React from "react";
const Mouse_14: React.FC<
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
        d="M12.618 4.09a1.757 1.757 0 0 1 2.384-.6l4.742 2.762a.5.5 0 0 0 .323.062.34.34 0 0 0 .237-.154l1.075-1.592a.75.75 0 0 1 1.243.84L21.547 7l-.002.002c-.636.935-1.793.99-2.556.545l-4.742-2.763a.257.257 0 0 0-.347.084l-.989 1.63-1.282-.779z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.185 5.354c-2.317-1.315-4.351-1.399-6.112-.55-1.7.818-3.017 2.446-4.088 4.27-1.07 1.822-1.85 3.76-1.721 5.625.134 1.938 1.235 3.633 3.551 4.947 2.317 1.315 4.351 1.399 6.113.55 1.7-.818 3.016-2.446 4.087-4.27 1.07-1.822 1.85-3.76 1.721-5.625-.134-1.938-1.235-3.633-3.551-4.947m-1.353 3.7a1 1 0 0 0-1.664-1.109l-1 1.5a1 1 0 1 0 1.664 1.11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_14;
