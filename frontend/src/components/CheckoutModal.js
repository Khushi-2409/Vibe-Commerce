import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function CheckoutModal({ isOpen, onRequestClose, cartData, onConfirm, receipt }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Receipt" className="modal" overlayClassName="overlay">
      <button onClick={onRequestClose} className="close">X</button>
      {!receipt ? (
        <>
          <h2>Order Summary</h2>
          <div>Total: ₹{cartData.total}</div>
          <p>Enter your name & email in the cart to confirm checkout.</p>
        </>
      ) : (
        <>
          <h2>Receipt</h2>
          <div>Order ID: {receipt.orderId}</div>
          <div>Total: ₹{receipt.total}</div>
          <div>Date: {new Date(receipt.createdAt).toLocaleString()}</div>
          <div>Customer: {receipt.customer?.name} ({receipt.customer?.email})</div>
          <button onClick={onRequestClose}>Close</button>
        </>
      )}
    </Modal>
  )
}
