function initOpenCVDemo() {
  const btnAdd = document.getElementById('btnAdd');
  const btnSub = document.getElementById('btnSub');

  btnAdd.addEventListener('click', onAddImages);
  btnSub.addEventListener('click', onSubImages);
}

// Cuando termine de cargarse, llamamos a la funcion 
cv['onRuntimeInitialized'] = function() {
  console.log('OpenCV.js listo');
  initOpenCVDemo();
};

function readInputs() {
  // Coge las imagenes desde del tag <img>
  let src1 = cv.imread('image1');
  let src2 = cv.imread('image2');

  // adapta el tamaño de las imagenes, en mi caso tienen el mismo tamaño
  if (src1.rows !== src2.rows || src1.cols !== src2.cols) {
    let resized = new cv.Mat();
    let dsize = new cv.Size(src1.cols, src1.rows);
    cv.resize(src2, resized, dsize, 0, 0, cv.INTER_AREA);
    src2.delete();
    src2 = resized;
  }

  return { src1, src2 };
}

