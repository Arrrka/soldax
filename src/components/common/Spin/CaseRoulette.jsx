import { useState, useEffect, useRef } from 'react';
import './CaseRoulette.css';
import { Space, Avatar } from 'antd';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';

const CaseRoulette = ({ items, winnerItem, triggerSpin }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [offset, setOffset] = useState(0);
  const [winnerIndexInFull, setWinnerIndexInFull] = useState(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const config = {
    itemWidth: 140,
    visibleItems: 3,
    spinTime: 8000,
    minIndexOffset: 25,
  };

  const fullItems = Array(50)
    .fill(0)
    .flatMap(() => items);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const spin = (winner) => {
    if (isSpinning || !winner) return;

    setIsSpinning(true);
    setWinnerIndexInFull(null);

    const wheelWidth = trackRef.current.parentElement.offsetWidth;
    const centerOffset = wheelWidth / 2 - config.itemWidth / 2;

    const currentIndex = Math.floor(-offset / config.itemWidth);
    const minIndex = currentIndex + config.minIndexOffset;

    const possibleIndexes = fullItems
      .map((item, idx) =>
        item.id === winner.id && idx >= minIndex ? idx : null,
      )
      .filter((idx) => idx !== null);

    const winnerIndex = possibleIndexes[0];
    setWinnerIndexInFull(winnerIndex);

    const finalOffset = -winnerIndex * config.itemWidth + centerOffset;

    const startOffset = offset;
    const duration = config.spinTime;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentOffset =
        startOffset + (finalOffset - startOffset) * easedProgress;

      setOffset(currentOffset);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${currentOffset}px)`;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
      }
    };

    requestAnimationFrame(animate);
  };

  // Следим за триггером и winnerItem
  useEffect(() => {
    if (triggerSpin && winnerItem) {
      spin(winnerItem);
    }
  }, [triggerSpin, winnerItem]);

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="roulette-container">
      <div className="roulette-wheel">
        <div className="white-pointer top" />
        <div className="left-edge" />
        <div className="roulette-track" ref={trackRef}>
          {fullItems.map((item, index) => {
            const isWinner =
              !isSpinning &&
              winnerIndexInFull !== null &&
              index === winnerIndexInFull;

            return (
              <div
                key={`${item.id}-${index}`}
                className={`roulette-item ${isWinner ? 'winner-item' : ''}`}
                style={{
                  backgroundImage: `url(${item.icon})`,
                }}
              >
                <div className="blue-card-mini-second-style">
                  <Space wrap size={16} style={{ marginLeft: 5 }}>
                    <Avatar size="small" shape="circle" gap="5" src={logo} />
                  </Space>
                  <span>0.00</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="white-pointer bottom" />
        <div className="right-edge" />
      </div>
    </div>
  );
};

export default CaseRoulette;
