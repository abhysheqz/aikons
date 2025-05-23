import React from "react";
const PoliceCap: React.FC<
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
        d="M19.793 16.655c.061-.745-.288-1.564-.783-2.009l1.304-1.45c.942.847 1.534 2.259 1.423 3.618-.058.7-.304 1.41-.811 2.013-.51.605-1.233 1.047-2.153 1.286-1.333.348-3.238.797-4.727 1.148-.754.178-1.4.33-1.813.432L12 21.75l-.233-.057a226 226 0 0 0-1.813-.432c-1.489-.35-3.394-.8-4.727-1.148-.92-.24-1.644-.681-2.153-1.286a3.54 3.54 0 0 1-.81-2.013c-.112-1.36.48-2.771 1.422-3.618l1.304 1.45c-.495.445-.844 1.264-.783 2.01.029.351.147.663.36.916.211.251.563.5 1.152.655 1.316.343 3.15.775 4.623 1.122.647.152 1.224.288 1.658.393.434-.105 1.011-.24 1.658-.393 1.473-.347 3.307-.779 4.623-1.122.59-.154.941-.404 1.152-.655.213-.253.331-.565.36-.917"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 10.978c0-1.203-.832-2.331-1.789-3.264-.993-.968-2.294-1.892-3.563-2.685a46 46 0 0 0-3.496-1.962c-.293-.15-.842-.375-1.286-.557-.275-.113-.51-.21-.616-.26-.107.05-.341.147-.616.26-.444.182-.993.408-1.286.557-.95.482-2.22 1.165-3.496 1.962-1.268.793-2.57 1.717-3.563 2.685-.957.933-1.789 2.06-1.789 3.263 0 .91.302 1.845.94 2.561.649.73 1.606 1.19 2.81 1.19h14c1.203 0 2.161-.46 2.81-1.19.638-.716.94-1.65.94-2.56m-10.75-4 2 1c0 1.5-.775 2.595-2 3-1.225-.405-2-1.5-2-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoliceCap;
