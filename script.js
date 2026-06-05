/* ========================================
   Script.js — 王柏凯作品集 · 全部交互逻辑
   A1 + B3 + C3 + D1 + E3
   ======================================== */

(function() {
  'use strict';

  // ── 项目数据定义 ──────────────────────────────

  const BASE = 'assets';

  const projects = [
    {
      id: 'work1', name: '个人VCR', role: '导演/编剧/摄影', category: '个人作品',
      isPersonal: true,
      description: '进入学院学习摄影后对于个人的总结',
      video: null,
      images: Array.from({length: 9}, (_, i) => BASE + '/个人作品/作品1/' + (i+1) + '.webp')
    },
    {
      id: 'work2', name: '一条路', role: '导演/编剧/摄影/灯光', category: '个人作品',
      isPersonal: true,
      description: '剧组杀青后现实与理想的落差',
      video: null,
      images: Array.from({length: 9}, (_, i) => BASE + '/个人作品/作品2/' + (i+1) + '.webp')
    },
    {
      id: 'work3', name: '录音', role: '导演/编剧/摄影/灯光', category: '个人作品',
      isPersonal: true,
      description: '自主创作剧本',
      video: null,
      images: Array.from({length: 9}, (_, i) => BASE + '/个人作品/作品3/' + (i+1) + '.webp')
    },
    {
      id: 'work4', name: '时间倒数', role: '导演/编剧', category: '个人作品',
      isPersonal: true,
      description: '毕业设计，个人完成全流程AIGC短片',
      video: null,
      images: Array.from({length: 9}, (_, i) => BASE + '/个人作品/作品4/' + (i+1) + '.webp')
    },
    {
      id: 'work5', name: '片刻', role: '灯光师', category: '个人作品',
      isPersonal: true,
      description: '朋友的毕设，夜拍日的灯光',
      video: null,
      images: Array.from({length: 9}, (_, i) => BASE + '/个人作品/作品5/' + (i+1) + '.webp')
    },

{
      id: 'photo1', name: '当离别开出花', role: 'B机掌机', category: '摄影项目',
      isPersonal: false,
      description: '院线电影，湖北省电影精品重点项目，省级国家电影事业发展专项资金优秀剧本扶持',
      video: BASE + '/摄影项目经历/项目1/单个镜头.mp4',
      images: [
        BASE + '/摄影项目经历/项目1/1.webp',
        BASE + '/摄影项目经历/项目1/2.webp',
        BASE + '/摄影项目经历/项目1/3.webp'
      ]
    },
{
      id: 'photo2', name: '奇门遁甲：逢凶化吉', role: 'B机摄助', category: '摄影项目',
      description: '爱奇艺出品网络大电影',
      isPersonal: false,
      video: null,
      images: [
        BASE + '/摄影项目经历/项目2/1.webp',
        BASE + '/摄影项目经历/项目2/2.webp',
        BASE + '/摄影项目经历/项目2/3.webp',
        BASE + '/摄影项目经历/项目2/4.webp'
      ]
    },
{
      id: 'photo3', name: '九叔归来之湘西赶尸', role: 'B机摄助', category: '摄影项目',
      isPersonal: false,
      description: '腾讯视频九叔归来系列第四部',
      video: null,
      images: [
        BASE + '/摄影项目经历/项目3/1.webp',
        BASE + '/摄影项目经历/项目3/2.webp',
        BASE + '/摄影项目经历/项目3/3.webp',
        BASE + '/摄影项目经历/项目3/4.webp',
        BASE + '/摄影项目经历/项目3/5.webp',
        BASE + '/摄影项目经历/项目3/6.webp'
      ]
    },
{
      id: 'photo4', name: 'CCTV新质生产力纪录片', role: '摄影', category: '摄影项目',
      description: 'CCTV新质生产力 · 强国制造系列百集纪录片',
      isPersonal: false,
      video: null,
      images: [
        BASE + '/摄影项目经历/项目4/1.webp',
        BASE + '/摄影项目经历/项目4/2.webp',
        BASE + '/摄影项目经历/项目4/3.webp',
        BASE + '/摄影项目经历/项目4/4.webp',
        BASE + '/摄影项目经历/项目4/5.webp',
        BASE + '/摄影项目经历/项目4/6.webp',
        BASE + '/摄影项目经历/项目4/7.webp'
      ]
    },
{
      id: 'photo5', name: '金甲蕴风华', role: '摄影', category: '摄影项目',
      description: '《匠心之路》栏目',
      isPersonal: false,
      video: null,
      images: [
        BASE + '/摄影项目经历/项目5/1.webp',
        BASE + '/摄影项目经历/项目5/2.webp',
        BASE + '/摄影项目经历/项目5/3.webp',
        BASE + '/摄影项目经历/项目5/4.webp',
        BASE + '/摄影项目经历/项目5/5.webp'
      ]
    },
{
      id: 'photo6', name: '这条路', role: '摄影', category: '摄影项目',
      isPersonal: false,
      description: '中国建材总院75周年纪念影片，中央企业优秀故事作品二等奖',
      video: BASE + '/摄影项目经历/项目6/8.mp4',
      images: [
        BASE + '/摄影项目经历/项目6/1.webp',
        BASE + '/摄影项目经历/项目6/2.webp',
        BASE + '/摄影项目经历/项目6/3.webp',
        BASE + '/摄影项目经历/项目6/4.webp',
        BASE + '/摄影项目经历/项目6/5.webp',
        BASE + '/摄影项目经历/项目6/6.webp',
        BASE + '/摄影项目经历/项目6/7.webp'
      ]
    },
{
      id: 'light1', name: '古村迷宅', role: '灯光助理', category: '灯光项目',
      isPersonal: false,
      description: '院线电影',
      video: null,
      images: [
        BASE + '/灯光项目经历/项目1/58f2bc9b07bba969572f4dbb4576eb15.webp',
        BASE + '/灯光项目经历/项目1/c67cd1871ce18d0366aaef11b7d9a037.webp',
        BASE + '/灯光项目经历/项目1/DSC03690.webp',
        BASE + '/灯光项目经历/项目1/mmexport1718061980760.webp'
      ]
    },
{
      id: 'light2', name: '三养火鸡辣酱广告', role: '灯光助理', category: '灯光项目',
      description: '抖音双11三养火鸡辣酱广告片',
      isPersonal: false,
      video: null,
      images: [
        BASE + '/灯光项目经历/项目2/1.webp',
        BASE + '/灯光项目经历/项目2/2.webp',
        BASE + '/灯光项目经历/项目2/3.webp',
        BASE + '/灯光项目经历/项目2/4.webp'
      ]
    },
{
      id: 'actor1', name: '闪耀的警徽（B组）', role: '演员副导演', category: '演员项目',
      isPersonal: false,
      description: '爱奇艺长篇电视剧。负责现场演员调度、拍摄执行与沟通协调',
      video: null,
      images: [
        BASE + '/演员副导演项目经历/1.webp'
      ]
    }
  ];

  // ── DOM 引用 ──────────────────────────────────

  const posterTrack = document.getElementById('poster-track');
  const posterWall = document.getElementById('poster-wall');
  const galleryOverlay = document.getElementById('gallery-overlay');
  const galleryTopbar = document.getElementById('gallery-topbar');
  const galleryScroll = document.getElementById('gallery-scroll');
  const galleryScrollInner = document.getElementById('gallery-scroll-inner');
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryTitle = document.getElementById('gallery-title');
  const galleryRole = document.getElementById('gallery-role');
  const galleryCounter = document.getElementById('gallery-counter');
  const galleryProgressFill = document.getElementById('gallery-progress-fill');
  const gridToggleBtn = document.getElementById('grid-toggle');
  const fullscreenViewer = document.getElementById('fullscreen-viewer');
  const fullscreenImg = document.getElementById('fullscreen-img');
  const fullscreenCounter = document.getElementById('fullscreen-counter');
  const crackLine = document.getElementById('crack-line');
  const crackBeam = document.getElementById('crack-beam');
  const crackUpper = document.getElementById('crack-upper');
  const crackLower = document.getElementById('crack-lower');

  let currentProject = null;
  let currentMediaIndex = 0;
  let isGridMode = false;
  let galleryMediaList = []; // [{type:'video'|'image', src}]
  let isAnimating = false;
  let fullscreenIndex = 0;
  let fullscreenMediaList = [];

  // ── 横向滚动海报墙渲染 ──────────────────────────

  projects.forEach((proj, index) => {
    const el = document.createElement('div');
    el.className = 'poster';
    el.setAttribute('data-index', index);

    el.innerHTML =
      '<div class="poster-name">' + proj.name + '</div>' +
      '<div class="poster-separator"></div>' +
      '<div class="poster-role">' + proj.role + '</div>' +
      (proj.description ? '<div class="poster-description">' + proj.description + '</div>' : '');

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openProject(proj, el);
    });
    posterTrack.appendChild(el);
  });

  // ── 横向滚动交互 ───────────────────────────

  (function initScroll() {
    let isInPosterWall = false;

    function checkProximity() {
      const rect = posterWall.getBoundingClientRect();
      isInPosterWall = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3;
    }

    window.addEventListener('scroll', checkProximity);
    window.addEventListener('resize', checkProximity);
    checkProximity();

    posterWall.addEventListener('wheel', function(e) {
      if (!isInPosterWall) return;
      e.preventDefault();
      posterWall.scrollLeft += e.deltaY;
    }, { passive: false });

    // Mobile scroll hint
    if (window.innerWidth <= 768) {
      const hint = document.createElement('div');
      hint.className = 'mobile-scroll-hint';
      hint.textContent = '← 滑动查看更多 →';
      posterWall.parentElement.appendChild(hint);
    }
  })();

  document.getElementById('scroll-arrow-left').addEventListener('click', () => {
    posterWall.scrollBy({ left: -280, behavior: 'smooth' });
  });

  document.getElementById('scroll-arrow-right').addEventListener('click', () => {
    posterWall.scrollBy({ left: 280, behavior: 'smooth' });
  });

  // ── C3 画幅裂开动画 ──────────────────────────

  function animateCrack(posterEl, callback) {
    if (isAnimating) return;
    isAnimating = true;

    const rect = posterEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const w = rect.width;
    const h = rect.height;

    // Setup crack elements
    crackLine.style.left = rect.left + 'px';
    crackLine.style.top = cy + 'px';
    crackLine.style.width = '0px';
    crackLine.style.opacity = '1';

    crackBeam.style.left = rect.left + 'px';
    crackBeam.style.top = cy + 'px';
    crackBeam.style.width = w + 'px';
    crackBeam.style.height = '0px';
    crackBeam.style.opacity = '0';

    crackUpper.style.left = rect.left + 'px';
    crackUpper.style.top = rect.top + 'px';
    crackUpper.style.width = w + 'px';
    crackUpper.style.height = (cy - rect.top) + 'px';
    crackUpper.style.opacity = '1';

    crackLower.style.left = rect.left + 'px';
    crackLower.style.top = cy + 'px';
    crackLower.style.width = w + 'px';
    crackLower.style.height = (rect.bottom - cy) + 'px';
    crackLower.style.opacity = '1';

    // Phase 1: line expands 0→ width (0-200ms)
    crackLine.style.transition = 'width 200ms ease-out';
    crackLine.style.width = w + 'px';

    // Phase 2: crack opens (200-500ms)
    setTimeout(() => {
      crackUpper.style.transition = 'transform 300ms ease-in, opacity 300ms ease-in';
      crackLower.style.transition = 'transform 300ms ease-in, opacity 300ms ease-in';
      crackUpper.style.transform = 'translateY(-120%)';
      crackUpper.style.opacity = '0';
      crackLower.style.transform = 'translateY(120%)';
      crackLower.style.opacity = '0';

      crackBeam.style.transition = 'height 300ms ease-out, opacity 300ms ease-out';
      crackBeam.style.height = h + 'px';
      crackBeam.style.opacity = '1';
    }, 200);

    // Phase 3: beam expands to fullscreen, overlay appears (500-800ms)
    setTimeout(() => {
      crackBeam.style.transition = 'all 300ms ease-in-out';
      crackBeam.style.left = '0px';
      crackBeam.style.top = '0px';
      crackBeam.style.width = '100vw';
      crackBeam.style.height = '100vh';

      crackLine.style.transition = 'opacity 300ms';
      crackLine.style.opacity = '0';
    }, 500);

    // Phase 4: overlay fully visible, cleanup (800-1000ms)
    setTimeout(() => {
      galleryOverlay.classList.add('active');

      // Cleanup crack elements
      crackLine.style.opacity = '0';
      crackLine.style.width = '0px';
      crackBeam.style.opacity = '0';
      crackUpper.style.opacity = '0';
      crackLower.style.opacity = '0';

      setTimeout(() => {
        crackUpper.style.transform = '';
        crackLower.style.transform = '';
        crackBeam.style.left = '';
        crackBeam.style.top = '';
        crackBeam.style.width = '';
        crackBeam.style.height = '';
        isAnimating = false;
      }, 400);

      if (callback) callback();
    }, 800);
  }

  function animateCrackClose(posterEl, callback) {
    if (isAnimating) return;
    isAnimating = true;

    galleryOverlay.classList.remove('active');

    const rect = posterEl.getBoundingClientRect();
    const cy = rect.top + rect.height / 2;
    const w = rect.width;

    // Reverse: beam shrinks
    crackBeam.style.transition = 'all 250ms ease-in-out';
    crackBeam.style.left = rect.left + 'px';
    crackBeam.style.top = cy + 'px';
    crackBeam.style.width = w + 'px';
    crackBeam.style.height = '0px';
    crackBeam.style.opacity = '0.5';

    setTimeout(() => {
      crackBeam.style.opacity = '0';

      // Line appears
      crackLine.style.left = rect.left + 'px';
      crackLine.style.top = cy + 'px';
      crackLine.style.width = w + 'px';
      crackLine.style.opacity = '1';
      crackLine.style.transition = 'opacity 200ms';

      // Halves slide back
      crackUpper.style.transition = 'transform 300ms ease-out, opacity 300ms ease-out';
      crackLower.style.transition = 'transform 300ms ease-out, opacity 300ms ease-out';
      crackUpper.style.transform = '';
      crackUpper.style.opacity = '1';
      crackLower.style.transform = '';
      crackLower.style.opacity = '1';
    }, 300);

    setTimeout(() => {
      crackLine.style.transition = 'width 200ms ease-in, opacity 200ms';
      crackLine.style.width = '0px';
      crackLine.style.opacity = '0';

      setTimeout(() => {
        crackUpper.style.opacity = '0';
        crackLower.style.opacity = '0';
        isAnimating = false;
        if (callback) callback();
      }, 200);
    }, 600);
  }

  // ── 画廊管理 ──────────────────────────────────

  function buildMediaList(proj) {
    const list = [];
    if (proj.video) list.push({ type: 'video', src: proj.video });
    proj.images.forEach(src => list.push({ type: 'image', src: src }));
    return list;
  }

  function openProject(proj, posterEl) {
    currentProject = proj;
    galleryMediaList = buildMediaList(proj);
    isGridMode = proj.isPersonal;
    currentMediaIndex = 0;

    galleryTitle.textContent = proj.name;
    galleryRole.textContent = proj.role;

    let descEl = document.getElementById('gallery-desc');
    if (!descEl) {
      descEl = document.createElement('div');
      descEl.id = 'gallery-desc';
      descEl.className = 'gallery-topbar-desc';
      galleryRole.parentNode.appendChild(descEl);
    }
    descEl.textContent = proj.description || '';
    descEl.style.display = proj.description ? 'block' : 'none';

    updateCounter();

    // Toggle grid button visibility
    gridToggleBtn.style.display = proj.isPersonal ? 'inline-block' : 'none';
    if (proj.isPersonal) {
      gridToggleBtn.textContent = '全宽浏览';
      gridToggleBtn.classList.remove('active');
    }

    if (proj.isPersonal) {
      renderGrid();
      galleryGrid.style.display = 'grid';
      galleryScroll.style.display = 'none';
    } else {
      renderScrollView();
      galleryGrid.style.display = 'none';
      galleryScroll.style.display = 'block';
    }

    animateCrack(posterEl);
  }

  function closeGallery() {
    const posterEl = document.querySelector('.poster[data-index="' + projects.indexOf(currentProject) + '"]');
    if (!posterEl) {
      galleryOverlay.classList.remove('active');
      return;
    }

    galleryScrollInner.innerHTML = '';
    galleryGrid.innerHTML = '';
    animateCrackClose(posterEl, () => {
      currentProject = null;
      galleryMediaList = [];
      galleryScrollInner.innerHTML = '';
      galleryGrid.innerHTML = '';
    });
  }

  function updateCounter() {
    if (isGridMode && currentProject && currentProject.isPersonal) {
      galleryCounter.textContent = '3×3 九宫格';
    } else if (galleryMediaList.length > 0) {
      galleryCounter.textContent = (currentMediaIndex + 1) + ' / ' + galleryMediaList.length;
    } else {
      galleryCounter.textContent = '';
    }
  }

  // ── 九宫格渲染 ────────────────────────────────

  function renderGrid() {
    galleryGrid.innerHTML = '';
    const imgs = currentProject.images;

    imgs.forEach((src, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-grid-item';
      item.innerHTML = '<img src="' + src + '" loading="lazy" alt="图片 ' + (i+1) + '">';
      item.addEventListener('click', () => {
        switchToScrollFromGrid(i);
      });
      galleryGrid.appendChild(item);
    });
  }

  function switchToScrollFromGrid(startIndex) {
    isGridMode = false;
    currentMediaIndex = startIndex;
    gridToggleBtn.textContent = '九宫格';
    gridToggleBtn.classList.add('active');
    galleryGrid.style.display = 'none';
    galleryScroll.style.display = 'block';
    galleryScrollInner.innerHTML = '';
    renderScrollView();

    // Scroll to the starting image
    setTimeout(() => {
      const target = document.querySelector('.gallery-img-wrap[data-media-index="' + startIndex + '"]');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    updateCounter();
  }

  // ── 全宽沉浸滚动视图 ──────────────────────────

  function renderScrollView() {
    galleryScrollInner.innerHTML = '';

    galleryMediaList.forEach((media, i) => {
      if (media.type === 'video') {
        const wrap = document.createElement('div');
        wrap.className = 'gallery-video-wrap';
        wrap.setAttribute('data-media-index', i);
        wrap.innerHTML = '<video src="' + media.src + '" controls preload="metadata" poster="' + currentProject.images[0] + '"></video>';
        galleryScrollInner.appendChild(wrap);
      } else {
        const wrap = document.createElement('div');
        wrap.className = 'gallery-img-wrap';
        wrap.setAttribute('data-media-index', i);

        const label = getMediaLabel(i);
        wrap.innerHTML =
          '<img src="' + media.src + '" loading="lazy" alt="图片 ' + (i+1) + '">' +
          '<div class="gallery-img-caption">#' + String(i+1).padStart(2,'0') + ' · ' + label + '</div>';

        wrap.querySelector('img').addEventListener('click', () => {
          openFullscreen(i);
        });

        galleryScrollInner.appendChild(wrap);
      }
    });

    currentMediaIndex = 0;
    updateCounter();
  }

  function getMediaLabel(index) {
    if (currentProject.video && index === 0) return '花絮视频';
    // Heuristic: first 2 images as "剧照", rest as "花絮"
    const vidOffset = currentProject.video ? 1 : 0;
    const imgIdx = currentProject.video ? index - 1 : index;
    if (imgIdx < 2) return '剧照';
    if (imgIdx < 4) return '花絮';
    return '静帧';
  }

  // ── 进度条更新 ────────────────────────────────

  galleryScroll.addEventListener('scroll', function() {
    if (!galleryScroll.style.display || galleryScroll.style.display === 'none') return;
    const scrollTop = galleryScroll.scrollTop;
    const scrollHeight = galleryScroll.scrollHeight - galleryScroll.clientHeight;
    if (scrollHeight <= 0) {
      galleryProgressFill.style.width = '0%';
      return;
    }
    const pct = Math.min(100, (scrollTop / scrollHeight) * 100);
    galleryProgressFill.style.width = pct + '%';
  });

  // ── 全屏单张查看 ──────────────────────────────

  function openFullscreen(index) {
    fullscreenIndex = index;
    fullscreenMediaList = galleryMediaList.filter(m => m.type === 'image');
    const imgIdx = fullscreenMediaList.findIndex(m => m.src === galleryMediaList[index].src);
    if (imgIdx === -1) return;
    fullscreenIndex = imgIdx;

    if (fullscreenMediaList.length === 0) return;

    let fsDesc = document.getElementById('fullscreen-desc');
    if (!fsDesc) {
      fsDesc = document.createElement('div');
      fsDesc.id = 'fullscreen-desc';
      fsDesc.className = 'fullscreen-desc';
      fullscreenViewer.appendChild(fsDesc);
    }
    fsDesc.textContent = (currentProject && currentProject.description) || '';

    showFullscreenImage();
    fullscreenViewer.classList.add('active');
  }

  function showFullscreenImage() {
    fullscreenImg.src = fullscreenMediaList[fullscreenIndex].src;
    fullscreenImg.alt = (currentProject && currentProject.name) || '作品图片';
    fullscreenCounter.textContent = (fullscreenIndex + 1) + ' / ' + fullscreenMediaList.length;
  }

  function closeFullscreen() {
    fullscreenViewer.classList.remove('active');
  }

  function fullscreenPrev() {
    if (fullscreenMediaList.length === 0) return;
    fullscreenIndex = (fullscreenIndex - 1 + fullscreenMediaList.length) % fullscreenMediaList.length;
    showFullscreenImage();
  }

  function fullscreenNext() {
    if (fullscreenMediaList.length === 0) return;
    fullscreenIndex = (fullscreenIndex + 1) % fullscreenMediaList.length;
    showFullscreenImage();
  }

  document.getElementById('fullscreen-prev').addEventListener('click', fullscreenPrev);
  document.getElementById('fullscreen-next').addEventListener('click', fullscreenNext);
  document.getElementById('fullscreen-close').addEventListener('click', closeFullscreen);

  fullscreenViewer.addEventListener('click', function(e) {
    if (e.target === fullscreenViewer) closeFullscreen();
  });

  // ── 九宫格/全宽切换 ────────────────────────────

  gridToggleBtn.addEventListener('click', function() {
    if (!currentProject || !currentProject.isPersonal) return;

    if (isGridMode) {
      // Switch to scroll
      isGridMode = false;
      gridToggleBtn.textContent = '九宫格';
      gridToggleBtn.classList.add('active');
      galleryGrid.style.display = 'none';
      galleryScroll.style.display = 'block';
      galleryScrollInner.innerHTML = '';
      galleryMediaList = buildMediaList(currentProject);
      currentMediaIndex = 0;
      renderScrollView();
    } else {
      // Switch to grid
      isGridMode = true;
      gridToggleBtn.textContent = '全宽浏览';
      gridToggleBtn.classList.remove('active');
      galleryScroll.style.display = 'none';
      galleryGrid.style.display = 'grid';
      galleryScrollInner.innerHTML = '';
      renderGrid();
    }
    updateCounter();
  });

  // ── 画廊关闭按钮 ──────────────────────────────

  document.getElementById('gallery-close').addEventListener('click', closeGallery);

  galleryOverlay.addEventListener('click', function(e) {
    if (e.target === galleryOverlay) closeGallery();
  });

  // ── 键盘交互 ──────────────────────────────────

  document.addEventListener('keydown', function(e) {
    // Fullscreen viewer
    if (fullscreenViewer.classList.contains('active')) {
      if (e.key === 'Escape') { closeFullscreen(); return; }
      if (e.key === 'ArrowLeft') { fullscreenPrev(); return; }
      if (e.key === 'ArrowRight') { fullscreenNext(); return; }
      return;
    }

    // Gallery open
    if (galleryOverlay.classList.contains('active')) {
      if (e.key === 'Escape') { closeGallery(); return; }

      if (!isGridMode && galleryScroll.style.display !== 'none') {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          galleryScroll.scrollBy({ top: 200, behavior: 'smooth' });
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          galleryScroll.scrollBy({ top: -200, behavior: 'smooth' });
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          // Snap to prev/next media
          const items = galleryScrollInner.querySelectorAll('.gallery-img-wrap, .gallery-video-wrap');
          if (items.length === 0) return;
          const dir = e.key === 'ArrowRight' ? 1 : -1;
          currentMediaIndex = Math.max(0, Math.min(galleryMediaList.length - 1, currentMediaIndex + dir));
          const target = items[currentMediaIndex];
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          updateCounter();
        }
      }
      return;
    }
  });

  // ── 移动端汉堡菜单 ────────────────────────────

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  hamburger.addEventListener('click', () => mobileMenu.classList.add('active'));
  mobileMenuClose.addEventListener('click', () => mobileMenu.classList.remove('active'));
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('active'));
  });

  document.getElementById('current-year').textContent = new Date().getFullYear();

  })();