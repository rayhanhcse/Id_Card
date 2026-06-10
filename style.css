/* === Reset & Base === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Inter', sans-serif;
  background: #f0f2f7;
  color: #222;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* === Header === */
.header {
  background: #0f2549;
  color: #fff;
  padding: 0 32px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,0.2);
}
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header-logo { width: 44px; height: 44px; object-fit: contain; border-radius: 50%; }
.header-emblem svg { display: block; }
.header-title h1 {
  font-size: 1.18rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}
.header-title p {
  font-size: 0.78rem;
  color: #a8c0e0;
  margin-top: 1px;
}
.btn-download {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s, transform 0.1s;
}
.btn-download:hover { background: #1d4ed8; transform: translateY(-1px); }
.btn-download:active { transform: translateY(0); }

/* === Main Container === */
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  padding: 28px 32px;
  flex: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

/* === Section Cards === */
.form-section, .preview-section {
  background: #fff;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e8edf5;
}
.section-header h2 {
  font-size: 1.08rem;
  font-weight: 700;
  color: #1a3a6b;
}

/* === Form === */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group.full-width { grid-column: 1 / -1; }
.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #444;
}
.form-group input,
.form-group select {
  border: 1.5px solid #d1d9e6;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  color: #222;
  background: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  appearance: none;
  -webkit-appearance: none;
}
.form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}
.form-group input:focus,
.form-group select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
}
.input-icon {
  position: relative;
}
.input-icon input { width: 100%; padding-right: 40px; }
.input-icon svg {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Photo Upload */
.photo-upload-area {
  border: 2px dashed #c7d4e8;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.photo-upload-area:hover {
  border-color: #2563eb;
  background: #f4f7ff;
}
.photo-preview-container {
  width: 72px;
  height: 86px;
  border: 1.5px solid #d1d9e6;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #f5f7fb;
}
.photo-preview-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.photo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo-upload-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.photo-upload-text span {
  font-size: 0.88rem;
  font-weight: 600;
  color: #1a3a6b;
}
.photo-upload-text small {
  font-size: 0.75rem;
  color: #888;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 14px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1.5px solid #e8edf5;
}
.btn-reset {
  background: #fff;
  color: #333;
  border: 1.5px solid #d1d9e6;
  padding: 11px 28px;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  transition: background 0.2s, border-color 0.2s;
}
.btn-reset:hover { background: #f4f7ff; border-color: #2563eb; }
.btn-generate {
  flex: 1;
  background: #1a3a6b;
  color: #fff;
  border: none;
  padding: 11px 28px;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s, transform 0.1s;
}
.btn-generate:hover { background: #0f2549; transform: translateY(-1px); }
.btn-generate:active { transform: translateY(0); }

/* === ID Card Preview === */
.id-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4px;
}

.id-card {
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  background: #fff;
  position: relative;
  font-size: 13px;
}

/* Card Header */
.card-header {
  background: #1a3a6b;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 88px;
}
.card-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
}
.card-logo-box {
  flex-shrink: 0;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.3));
}
.card-header-text {}
.card-uni-en {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  line-height: 1.1;
}
.card-uni-bn {
  color: #e0e8f8;
  font-size: 0.88rem;
  margin-top: 3px;
  font-family: 'SolaimanLipi', 'Kalpurush', 'Noto Sans Bengali', sans-serif;
}
.card-estd {
  color: #a8c0e0;
  font-size: 0.72rem;
  margin-top: 3px;
  letter-spacing: 1px;
}
.card-header-right {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

/* Card Body */
.card-body {
  display: flex;
  gap: 0;
  background: #fff;
  padding: 14px;
  border-bottom: 1px solid #e8edf5;
}
.card-body-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 110px;
  padding-right: 14px;
}
.card-photo-box {
  width: 100px;
  height: 118px;
  border: 2px solid #d1d9e6;
  border-radius: 4px;
  overflow: hidden;
  background: #f0f2f7;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-photo-box img { width: 100%; height: 100%; object-fit: cover; }
.card-photo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.card-role-badge {
  background: #1a3a6b;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 5px 18px;
  border-radius: 4px;
  text-align: center;
  width: 100%;
}
.card-body-right {
  flex: 1;
  position: relative;
  padding-top: 2px;
}
.card-dept-title {
  font-size: 0.68rem;
  font-weight: 800;
  color: #1a3a6b;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 10px;
  line-height: 1.3;
  border-bottom: 1.5px solid #1a3a6b;
  padding-bottom: 6px;
}
.card-info-table { width: 100%; border-collapse: collapse; }
.card-info-table tr { line-height: 1.8; }
.info-key {
  font-size: 0.75rem;
  font-weight: 700;
  color: #222;
  white-space: nowrap;
  padding-right: 4px;
  vertical-align: top;
}
.info-sep {
  font-size: 0.75rem;
  color: #555;
  padding: 0 6px;
  vertical-align: top;
}
.info-val {
  font-size: 0.75rem;
  color: #333;
  vertical-align: top;
}

/* Seal */
.card-seal {
  position: absolute;
  right: 4px;
  top: 28px;
  pointer-events: none;
}

/* Signature */
.card-signature {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 8px;
  padding-top: 4px;
}
.signature-line { margin-bottom: 2px; }
.signature-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.68rem;
  color: #333;
  line-height: 1.5;
}
.signature-info strong { font-weight: 700; color: #1a3a6b; }

/* Barcode */
.card-barcode-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px 6px;
  background: #fff;
}
#barcode { max-width: 200px; height: 46px; }
.barcode-label {
  font-size: 0.7rem;
  color: #444;
  margin-top: 2px;
  letter-spacing: 1px;
}

/* Card Footer */
.card-footer {
  background: #1a3a6b;
  color: #c8d8f0;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  text-align: center;
}
.footer-sep { margin: 0 10px; color: #7a9cc8; }

/* === Notice Bar === */
.notice-bar {
  background: #eef3fd;
  border-top: 1.5px solid #c7d9f5;
  color: #1a3a6b;
  font-size: 0.82rem;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* === Site Footer === */
.site-footer {
  background: #fff;
  border-top: 1px solid #e8edf5;
  text-align: center;
  font-size: 0.78rem;
  color: #888;
  padding: 14px 32px;
}

/* === Responsive === */
@media (max-width: 900px) {
  .main-container {
    grid-template-columns: 1fr;
    padding: 18px 14px;
  }
  .form-grid { grid-template-columns: 1fr; }
  .form-group.full-width { grid-column: 1; }
  .id-card { max-width: 100%; }
}
@media (max-width: 600px) {
  .header { padding: 0 14px; }
  .header-title h1 { font-size: 0.95rem; }
  .btn-download { padding: 8px 14px; font-size: 0.82rem; }
  .card-header { padding: 10px 10px; }
  .card-uni-en { font-size: 0.9rem; }
}

/* Print styles */
@media print {
  body { background: #fff; }
  .header, .form-section, .notice-bar, .site-footer, .section-header { display: none !important; }
  .main-container { grid-template-columns: 1fr; padding: 0; gap: 0; }
  .preview-section { box-shadow: none; padding: 0; }
  .id-card { box-shadow: none; margin: 0 auto; }
}
