import React from "react";
const EidMubarak: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 11.805c0 5.354 4.34 9.695 9.695 9.695 4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.963 2.5C5.94 3.68 3 7.399 3 11.805"
      />
      <path
        fill="currentColor"
        d="M16.004 9.244a.75.75 0 1 0-.003-1.5zm-3.5-2.744.75.022zm3.99-3.434a.75.75 0 1 0-.984-1.132zm-.495 4.678a.75.75 0 1 0-.003 1.5zM19.497 6.5l-.75.022zM16.49 1.934a.75.75 0 0 0-.983 1.132zM12.252 15a.75.75 0 0 0 1.5 0zm.752-5.75 3-.006-.003-1.5-3 .006zm-1.25-2.772c-.008.284-.01.603.072 1 .081.39.237.819.505 1.357l1.343-.67c-.23-.462-.332-.767-.38-.994a2.6 2.6 0 0 1-.04-.65zm3.756-4.544c-.29.252-.635.497-1.027.777-.38.272-.801.573-1.186.907-.77.67-1.506 1.57-1.543 2.86l1.5.044c.019-.674.386-1.213 1.028-1.772.322-.28.684-.54 1.072-.818.376-.268.784-.557 1.14-.866zM19 7.75l-3.001-.006-.003 1.5 3 .006zm-.253-1.228c.007.248.005.428-.041.65-.048.226-.15.531-.38.994l1.343.668c.268-.537.424-.967.505-1.357.082-.396.08-.716.072-.999zm-3.24-3.456c.355.309.763.598 1.139.866.388.277.75.538 1.072.818.642.559 1.01 1.098 1.029 1.772l1.5-.044c-.038-1.29-.775-2.19-1.544-2.86a16 16 0 0 0-1.186-.907c-.392-.28-.737-.525-1.027-.777zM12.252 8.5V15h1.5V8.5zm5.996 0V16h1.5V8.5z"
      />
    </svg>
  );
};
export default EidMubarak;
