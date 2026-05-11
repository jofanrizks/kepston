import React from 'react';

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

export default function DonutChart({ rompi = 47, helm = 53 }) {
  const cx = 100, cy = 100, r = 70, stroke = 36;
  const rompiAngle = (rompi / 100) * 360;

  return (
    <div className="chart-card h-100">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="card-title">Jenis Pelanggaran</span>
        <div className="d-flex gap-3">
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#6b7280' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f87171', display: 'inline-block' }}></span>
            Rompi
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#6b7280' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }}></span>
            Helm
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center" style={{ gap: 24 }}>
        <svg viewBox="0 0 200 200" width="180" height="180">
          {/* Rompi arc */}
          <path
            d={arcPath(cx, cy, r, 0, rompiAngle)}
            fill="none"
            stroke="#f87171"
            strokeWidth={stroke}
            strokeLinecap="butt"
          />
          {/* Helm arc */}
          <path
            d={arcPath(cx, cy, r, rompiAngle, 360)}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={stroke}
            strokeLinecap="butt"
          />
          {/* Center text */}
          <text x={cx} y={cy - 6} textAnchor="middle" fontSize="13" fill="#6b7280" fontFamily="Plus Jakarta Sans">Rompi</text>
          <text x={cx} y={cy + 14} textAnchor="middle" fontSize="22" fontWeight="800" fill="#111827" fontFamily="JetBrains Mono, monospace">{rompi}%</text>
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: '#fef2f2', borderRadius: 10, padding: '10px 16px', minWidth: 120 }}>
            <div style={{ fontSize: 11, color: '#f87171', fontWeight: 700, marginBottom: 2 }}>🦺 Tidak Pakai Rompi</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#111', fontFamily: "'JetBrains Mono', monospace" }}>{rompi}%</div>
          </div>
          <div style={{ background: '#eff6ff', borderRadius: 10, padding: '10px 16px', minWidth: 120 }}>
            <div style={{ fontSize: 11, color: '#3b82f6', fontWeight: 700, marginBottom: 2 }}>⛑️ Tidak Pakai Helm</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#111', fontFamily: "'JetBrains Mono', monospace" }}>{helm}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}