import React from "react";
const MoonCloudMidSnow: React.FC<
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
        d="M12.125 14.875a1 1 0 0 1 1 1v1.234l.986-.592a1 1 0 0 1 1.029 1.716l-1.071.642 1.07.642a1 1 0 0 1-1.028 1.716l-.986-.592v1.234a1 1 0 1 1-2 0v-1.234l-.985.592a1 1 0 0 1-1.03-1.716l1.072-.642-1.071-.642a1 1 0 0 1 1.029-1.716l.985.592v-1.234a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.064 9.093c-.05.196-.074.294-.13.352s-.155.085-.35.14a5.752 5.752 0 0 0 1.541 11.29.042.042 0 0 0 .04-.05 2.5 2.5 0 0 1 .224-1.568c.104-.207.155-.311.155-.382 0-.07-.051-.174-.155-.382A2.498 2.498 0 0 1 9.4 14.885c.221-.02.332-.03.39-.066.06-.035.12-.128.243-.314a2.498 2.498 0 0 1 4.183 0c.122.186.183.28.242.314.059.036.17.046.391.066a2.498 2.498 0 0 1 2.012 3.608c-.104.208-.155.311-.155.382 0 .07.051.175.155.382.166.333.256.7.263 1.072.004.207.006.31.03.364a.27.27 0 0 0 .162.16c.055.022.14.022.308.022a5.25 5.25 0 0 0 1.242-10.352c-.243-.06-.365-.089-.427-.16-.063-.07-.077-.193-.104-.439a6.251 6.251 0 0 0-12.272-.831"
      />
      <path
        fill="currentColor"
        d="M3.535 7.59a3.1 3.1 0 0 1-.366-1.02 4.1 4.1 0 0 0 3.049-.443 4.15 4.15 0 0 0 1.898-2.436 3.109 3.109 0 0 1 .957 1.478 6.2 6.2 0 0 1 1.882-.685 5 5 0 0 0-.428-.97 5.03 5.03 0 0 0-2.992-2.35 1 1 0 0 0-1.267 1.083A2.18 2.18 0 0 1 5.21 4.4a2.12 2.12 0 0 1-2.354-.147 1 1 0 0 0-1.577.551 5.1 5.1 0 0 0 2.443 5.687 5.7 5.7 0 0 1 1.861-.906c.196-.054.294-.081.35-.14.054-.054.08-.145.124-.321A3.03 3.03 0 0 1 3.535 7.59"
      />
    </svg>
  );
};
export default MoonCloudMidSnow;
