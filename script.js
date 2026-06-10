// === DU CSE Student ID Card Generator ===

// Live update helpers
function getVal(id) {
  return document.getElementById(id).value.trim();
}

function updatePreview() {
  const name     = getVal('fullName')    || 'Rayhan Hussain';
  const sid      = getVal('studentId')   || 'CSE-25-0187';
  const session  = getVal('session')     || '2020-21';
  const dept     = getVal('department')  || 'Computer Science & Engineering (CSE)';
  const faculty  = getVal('faculty')     || 'Faculty of Science';
  const blood    = getVal('bloodGroup')  || 'B+';
  const dob      = getVal('dob')         || '30/09/2002';
  const valid    = getVal('validUntil')  || 'June 2030';

  document.getElementById('cName').textContent    = name;
  document.getElementById('cId').textContent      = sid;
  document.getElementById('cSession').textContent = session;
  document.getElementById('cDept').textContent    = dept;
  document.getElementById('cFaculty').textContent = faculty;
  document.getElementById('cBlood').textContent   = blood;
  document.getElementById('cDob').textContent     = dob;
  document.getElementById('cValid').textContent   = valid;

  // Department title in card
  const deptTitle = document.getElementById('cardDept');
  deptTitle.textContent = 'DEPARTMENT OF ' + dept.toUpperCase();

  // Barcode
  updateBarcode(sid);
  document.getElementById('barcodeLabel').textContent = sid;
}

function updateBarcode(value) {
  try {
    if (typeof JsBarcode !== 'undefined') {
      JsBarcode('#barcode', value || 'CSE-25-0187', {
        format: 'CODE128',
        width: 1.8,
        height: 42,
        displayValue: false,
        margin: 4,
        background: '#ffffff',
        lineColor: '#111111'
      });
    }
  } catch (e) {
    // fallback: hide barcode on error
    console.warn('Barcode error:', e);
  }
}

// === Photo Upload ===
function setupPhotoUpload() {
  const area    = document.getElementById('photoUploadArea');
  const input   = document.getElementById('photoInput');
  const preview = document.getElementById('photoPreview');
  const placeholder = document.getElementById('photoPlaceholder');
  const cardPhoto   = document.getElementById('cardPhoto');
  const cardPhotoPlaceholder = document.getElementById('cardPhotoPlaceholder');

  area.addEventListener('click', () => input.click());

  area.addEventListener('dragover', (e) => {
    e.preventDefault();
    area.style.borderColor = '#2563eb';
    area.style.background  = '#f4f7ff';
  });
  area.addEventListener('dragleave', () => {
    area.style.borderColor = '#c7d4e8';
    area.style.background  = '';
  });
  area.addEventListener('drop', (e) => {
    e.preventDefault();
    area.style.borderColor = '#c7d4e8';
    area.style.background  = '';
    const file = e.dataTransfer.files[0];
    if (file) handlePhotoFile(file);
  });

  input.addEventListener('change', () => {
    if (input.files[0]) handlePhotoFile(input.files[0]);
  });

  function handlePhotoFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG or PNG).');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert('Image size should not exceed 2MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      // Show in form
      preview.src        = src;
      preview.style.display = 'block';
      placeholder.style.display = 'none';
      // Show in card
      cardPhoto.src      = src;
      cardPhoto.style.display = 'block';
      cardPhotoPlaceholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
}

// === Live Input Listeners ===
function setupLiveListeners() {
  const fields = ['fullName','studentId','session','department','faculty','bloodGroup','dob','validUntil'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('input',  updatePreview);
    el.addEventListener('change', updatePreview);
  });
}

// === Reset ===
function setupReset() {
  document.getElementById('btnReset').addEventListener('click', () => {
    document.getElementById('fullName').value   = 'Rayhan Hussain';
    document.getElementById('studentId').value  = 'CSE-25-0187';
    document.getElementById('session').value    = '2020-21';
    document.getElementById('department').value = 'Computer Science & Engineering (CSE)';
    document.getElementById('faculty').value    = 'Faculty of Science';
    document.getElementById('bloodGroup').value = 'B+';
    document.getElementById('dob').value        = '30/09/2002';
    document.getElementById('validUntil').value = 'June 2030';

    // Reset photo
    const preview  = document.getElementById('photoPreview');
    const placeholder = document.getElementById('photoPlaceholder');
    const cardPhoto   = document.getElementById('cardPhoto');
    const cardPhotoPlaceholder = document.getElementById('cardPhotoPlaceholder');

    preview.style.display = 'none';
    preview.src = '';
    placeholder.style.display = 'flex';
    cardPhoto.style.display = 'none';
    cardPhoto.src = '';
    cardPhotoPlaceholder.style.display = 'flex';

    document.getElementById('photoInput').value = '';

    updatePreview();
  });
}

// === Generate Button (re-render / animate) ===
function setupGenerate() {
  document.getElementById('btnGenerate').addEventListener('click', () => {
    updatePreview();

    // Animate card
    const card = document.getElementById('idCard');
    card.style.transition = 'transform 0.15s, box-shadow 0.15s';
    card.style.transform  = 'scale(1.015)';
    card.style.boxShadow  = '0 12px 40px rgba(0,0,0,0.22)';
    setTimeout(() => {
      card.style.transform  = 'scale(1)';
      card.style.boxShadow  = '0 8px 32px rgba(0,0,0,0.18)';
    }, 200);
  });
}

// === Download ===
function setupDownload() {
  document.getElementById('btnDownload').addEventListener('click', async () => {
    // Try html2canvas if available, else print
    if (typeof html2canvas !== 'undefined') {
      downloadWithHtml2Canvas();
    } else {
      // Inject html2canvas dynamically then download
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      script.onload = () => downloadWithHtml2Canvas();
      script.onerror = () => window.print();
      document.head.appendChild(script);
    }
  });
}

async function downloadWithHtml2Canvas() {
  const card = document.getElementById('idCard');
  try {
    const canvas = await html2canvas(card, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false
    });
    const link = document.createElement('a');
    link.download = 'DU_Student_ID_Card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (e) {
    console.error('Download failed:', e);
    window.print();
  }
}

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  setupPhotoUpload();
  setupLiveListeners();
  setupReset();
  setupGenerate();
  setupDownload();
  updatePreview(); // initial render
});
