import React from "react";
const TextNumberSign: React.FC<
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
        d="M13 3a1 1 0 0 1 1 1v13.04c0 .907 0 1.705-.06 2.274-.03.28-.084.614-.217.903-.146.315-.503.783-1.162.783-.773 0-1.258-.517-1.568-.937-.294-.397-.621-.974-1.017-1.673l-.096-.17-6.5-11.454q-.21-.374-.378-.663Q3 6.512 3 7.022V20a1 1 0 1 1-2 0V6.96c0-.907 0-1.705.06-2.274.03-.28.084-.614.217-.903C1.423 3.468 1.78 3 2.44 3c.768 0 1.253.523 1.56.934.311.418.66 1.033 1.087 1.785l.034.06 6.543 11.53.335.59q.003-.41.002-.92V4a1 1 0 0 1 1-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.5 13a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-5.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.86 3.413c.462.105.99.287 1.34.637s.533.878.637 1.34A7.5 7.5 0 0 1 23 7a7.5 7.5 0 0 1-.163 1.61c-.104.462-.287.99-.637 1.34s-.878.533-1.34.636a7.5 7.5 0 0 1-1.61.164c-.55 0-1.116-.052-1.61-.164-.462-.104-.99-.286-1.34-.636s-.533-.878-.636-1.34A7.5 7.5 0 0 1 15.5 7c0-.55.052-1.116.164-1.61.104-.462.286-.99.636-1.34s.878-.532 1.34-.637a7.5 7.5 0 0 1 1.61-.163c.55 0 1.116.052 1.61.163"
      />
    </svg>
  );
};
export default TextNumberSign;
