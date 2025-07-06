import '../../../styles/base/App.css';
import { useState } from 'react';
import DepModalMain from './DepModalMain';
import DepWithTon from './DepWithTon';
import DepWithGift from './DepWithGift';

const DepModal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;
  const [status, setStatus] = useState('main');

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = () => {
    switch (status) {
      case 'main':
        return <DepModalMain setStatus={setStatus} onClose={onClose} />;
      case 'ton':
        return <DepWithTon setStatus={setStatus} onClose={onClose} />;
      case 'gift':
        return (
          <DepWithGift setStatus={setStatus} onClose={onClose} item={item} />
        );
    }
  };

  return (
    <div className="ton-modal__backdrop" onClick={handleBackdropClick}>
      <div className="ton-modal__container">
        <div className="ton-modal__window">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DepModal;
