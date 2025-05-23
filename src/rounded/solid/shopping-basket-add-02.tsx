import React from "react";
const ShoppingBasketAdd_02: React.FC<
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
        d="M11.875 3.125a4 4 0 0 0-4 4v.5a1 1 0 0 1-2 0v-.5a6 6 0 1 1 12 0v.5a1 1 0 1 1-2 0v-.5a4 4 0 0 0-4-4M16.875 12.875a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.606 6.68c.362-.055.815-.055 1.308-.055h13.922c.493 0 .946 0 1.308.055.402.06.825.207 1.136.603.302.385.357.83.343 1.236-.012.379-.09.844-.178 1.368l-.836 4.987c-.04.24-.06.359-.144.43s-.205.071-.447.071h-.043c-.283 0-.424 0-.512-.088s-.088-.23-.088-.512v-.9a2.5 2.5 0 0 0-5 0v.9c0 .283 0 .424-.088.512s-.23.088-.512.088h-.9c-.71 0-1.351.296-1.806.772-.115.12-.173.18-.23.204-.056.024-.125.024-.264.024H3.9c-.243 0-.364 0-.448-.071s-.104-.19-.144-.43L2.305 9.887c-.088-.524-.166-.99-.178-1.368-.014-.407.04-.85.344-1.236.31-.396.733-.542 1.135-.603M10.57 18.843c-.104-.245-.155-.368-.23-.418s-.186-.05-.405-.05H4.457c-.337 0-.506 0-.596.112s-.054.273.016.596q.085.39.181.724c.224.771.532 1.41 1.086 1.903.558.498 1.216.716 1.986.818.734.097 1.65.097 2.773.097h3.944c.212 0 .317 0 .381-.032a.26.26 0 0 0 .139-.145c.029-.066.023-.195.01-.454l-.002-.119v-.9c0-.283 0-.424-.088-.512s-.23-.088-.512-.088h-.9a2.5 2.5 0 0 1-2.306-1.532"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_02;
