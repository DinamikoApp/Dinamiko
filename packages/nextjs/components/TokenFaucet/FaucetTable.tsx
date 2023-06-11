import React from "react";
import FaucetBody from "./FaucetBody";

export default function FaucetTable() {
  return (
    <div className="w-full overflow-hidden shadow-md border  rounded-xl   bg-secondary-contract ">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className=" ml-5">
              <p className="text-2xl font-semibold"> Test Assets </p>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-sm border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-base-content px-4 py-4 text-left opacity-75">
                      Asset
                    </th>
                    <th scope="col" className="text-sm font-medium text-base-content px-4 py-4 text-left opacity-75">
                      Wallet Balance
                    </th>
                  </tr>
                </thead>
                <FaucetBody />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
