import React from "react";
import { IconButton } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  name: string;
  address: string;
  purchasedProducts: number;
  amountSpent: string;
  event:()=>void;
}

const BuyerRow: React.FC<Props> = ({
  name,
  address,
  purchasedProducts,
  amountSpent,
  event = ()=>{},
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1fr,1.5fr,1fr,1fr,.5fr] min-w-[600px] border-b-[2px] border-gray px-4 py-[8px]">
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-semibold text-black-main text-[11px] capitalize">
          {name}
        </p>
      </div>
      {/* order Id here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {address}
        </p>
      </div>
      {/*quantiti here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {purchasedProducts}
        </p>
      </div>
      {/* order status here */}
      <div className="w-full flex items-center justify-start">
        <p className="font-inter font-medium text-black-main text-[11px]">
          {amountSpent} $
        </p>
      </div>
      <div className="w-full flex items-center justify-start">
        <IconButton onClick={event}>
          <BsThreeDots size={15} className="text-black-main" />
        </IconButton>
      </div>
    </div>
  );
};

export default BuyerRow;
