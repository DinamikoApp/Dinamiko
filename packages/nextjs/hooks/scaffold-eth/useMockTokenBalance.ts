import { useEffect, useState } from "react";
import { useBalance, useAccount } from "wagmi";
import { getTargetNetwork } from "~~/utils/scaffold-eth";
import { useDeployedContractInfo } from "./useDeployedContractInfo";
import { useScaffoldContractRead } from "./useScaffoldContractRead";

export interface MockToken {
  tokenName: null | string;
  tokenSymbol: null | string;
  balance: null | number;
  isError: boolean;
  isLoading: boolean;
  tokenAddress: null | string;
  contractName: string;
}

export function useMockTokenBalance(contractName: string) {
  const { address } = useAccount();
  const [balance, setBalance] = useState<number | null>(null);
  const configuredChain = getTargetNetwork();
  const deployedContractData = useDeployedContractInfo(contractName);

  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address,
    token: deployedContractData?.address,
    watch: true,
    chainId: configuredChain.id,
  });

  const { data: tokenName } = useScaffoldContractRead(contractName, "name");
  const { data: tokenSymbol } = useScaffoldContractRead(contractName, "symbol");

  useEffect(() => {
    if (fetchedBalanceData?.formatted) {
      setBalance(Number(fetchedBalanceData.formatted));
    }
    if (!tokenName && tokenName) {
      setBalance(0);
    }
  }, [fetchedBalanceData]);

  return <MockToken><unknown>{
    balance,
    isError,
    isLoading,
    tokenName,
    tokenSymbol,
    tokenAddress: deployedContractData?.address,
    contractName,
  };
}
