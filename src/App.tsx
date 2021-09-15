import { useState } from "react";
import Modal from "react-modal";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransationModal } from "./components/NewTransactionModal";
import { TransactionsProdiver } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/goblal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  
   

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProdiver>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransationModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProdiver>
  );
}
