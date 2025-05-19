import React from "react";
const Touchpad_04: React.FC<
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
        d="m9.885 21.114-3.526-4.899a1.592 1.592 0 1 1 2.587-1.856l1.363 1.905a.45.45 0 0 0 .814-.264V5.965a1.213 1.213 0 1 1 2.427 0V13a.45.45 0 0 0 .9 0v-2.452c0-.135.09-.254.221-.283l.08-.015c.276-.045.71-.004.747 0h.005c.243.02.454.044.656.1.117.034.19.146.19.268V13.5a.45.45 0 0 0 .9 0v-1.947c0-.144.103-.266.247-.28.127-.012.298-.023.504-.023.406 0 .786.108 1.115.295.087.05.136.145.136.245V14a.45.45 0 0 0 .9 0v-1.447a.3.3 0 0 1 .283-.3l.066-.003a2.25 2.25 0 0 1 2.25 2.25v4.45c0 1.849-1.547 3.3-3.397 3.3h-7.242a2.75 2.75 0 0 1-2.226-1.136"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v5a1 1 0 1 1-2 0v-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Touchpad_04;
