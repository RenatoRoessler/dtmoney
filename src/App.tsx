import { useState } from "react";
import Modal from "react-modal";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransationModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/goblal";
import { TransactionsProdiver } from "./TransactionsContext";

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
