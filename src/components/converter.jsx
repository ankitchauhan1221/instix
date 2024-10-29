import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

export default function Component() {
 const [leftCurrency, setLeftCurrency] = useState("BTC");
 const [rightCurrency, setRightCurrency] = useState("USD");
 const [leftAmount, setLeftAmount] = useState("2");
 const [rightAmount, setRightAmount] = useState("560000");

 const handleExchange = () => {
  setLeftCurrency((prevLeft) => (prevLeft === "BTC" ? "USD" : "BTC"));
  setRightCurrency((prevRight) => (prevRight === "USD" ? "BTC" : "USD"));
  setLeftAmount(rightAmount);
  setRightAmount(leftAmount);
 };

 const handleConvert = () => {
  console.log("Converting...");
 };

 const renderCurrencyInput = (side) => {
  const isBTC = side === "left" ? leftCurrency === "BTC" : rightCurrency === "BTC";
  const amount = side === "left" ? leftAmount : rightAmount;
  const setAmount = side === "left" ? setLeftAmount : setRightAmount;
  const currency = side === "left" ? leftCurrency : rightCurrency;

  return (
   <div className="w-full md:w-2/5">
    <div className="relative">
     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {isBTC ? (
       <svg
        className="w-6 h-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
       >
        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
       </svg>
      ) : (
       <svg
        className="w-6 h-6 text-green-500"
        viewBox="0 0 24 24"
        fill="currentColor"
       >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
       </svg>
      )}
     </div>
     <input
      type="text"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full bg-gray-800 text-white text-xl md:text-2xl lg:text-3xl p-4 pl-12 rounded-md"
     />
     <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <span className="text-gray-400 text-lg">{currency}</span>
     </div>
    </div>
   </div>
  );
 };

 return (
  <div className="h-[50vh] flex items-center justify-center bg-black p-4">
   <div className="w-full max-w-6xl">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
     {leftCurrency} TO {rightCurrency} Converter
    </h1>
    <div className="bg-gray-900 rounded-lg p-4 md:p-6 lg:p-[5rem]">
     <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
      {renderCurrencyInput("left")}
      <div
       className="bg-yellow-500 rounded-full p-4 cursor-pointer hover:bg-yellow-600 transition-colors"
       onClick={handleExchange}
      >
       <ArrowUpDown className="w-8 h-8 text-black" />
      </div>
      {renderCurrencyInput("right")}
     </div>
     <div className="flex justify-center mt-[2.5rem]">
      <button
       onClick={handleConvert}
       className="bg-yellow-500 text-black font-regular py-[0.5rem] px-4 rounded-full hover:bg-yellow-600 transition-colors text-xl"
      >
       Convert Now
      </button>
     </div>
    </div>
   </div>
  </div>
 );
}
