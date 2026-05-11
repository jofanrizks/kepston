import React, { useMemo } from 'react';

function generateTrendData(points = 25) {
  const data = [];
  let val = 60;
  for (let i = 0; i < points; i++) {
    val = Math.max(10, Math.min(95, val + (Math.random() - 0.5) * 20));
    data.push(Math.round(val));
  }
  return data;
}

export default function TrendChart() {
  const data = useMemo(() => generateTrendData(25), []);

  const width = 480;
  const height = 160;
  const padX = 30;
  const padY = 15;

  const maxVal = 100;
  const minVal = 0;

  const toX = (i) => padX + (i / (data.length - 1)) * (width - padX * 2);
  const toY = (v) => padY + ((maxVal - v) / (maxVal - minVal)) * (height - padY * 2);

  const linePath = data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ');
  const areaPath = `${linePath} L ${toX(data.length - 1)} ${height - padY} L ${toX(0)} ${height - padY} Z`;

  const yTicks = [0, 20, 40, 60, 80, 100];
  const xTicks = [1, 5, 9, 13, 17, 21, 25];

  return (
    <div className="chart-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="card-title">Tren Pelanggaran</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#6b7280' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f87171', display: 'inline-block' }}></span>
          Pelanggaran
        </span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f87171" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Y Grid */}
          {yTicks.map(t => (
            <g key={t}>
              <line
                x1={padX} y1={toY(t)} x2={width - padX} y2={toY(t)}
                stroke="#f3f4f6" strokeWidth="1"
              />
              <text x={padX - 5} y={toY(t) + 4} textAnchor="end" fontSize="9" fill="#9ca3af">{t}</text>
            </g>
          ))}

          {/* X Labels */}
          {xTicks.map(t => (
            <text key={t} x={toX(t - 1)} y={height - 2} textAnchor="middle" fontSize="9" fill="#9ca3af">{t}</text>
          ))}

          {/* Area fill */}
          <path d={areaPath} fill="url(#areaGrad)" />

          {/* Line */}
          <path d={linePath} fill="none" stroke="#f87171" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

          {/* Dots */}
          {data.map((v, i) => (
            <circle key={i} cx={toX(i)} cy={toY(v)} r="3" fill="#f87171" stroke="#fff" strokeWidth="1.5" />
          ))}
        </svg>
      </div>
    </div>
  );
}