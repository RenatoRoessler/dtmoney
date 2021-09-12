import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/goblal";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransationModal } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransationModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
