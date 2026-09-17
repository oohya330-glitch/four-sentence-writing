// Lesson ten: transfer the four-sentence structure to new, engaging topics.
(() => {
  const prompt = 'Which digital skill would you prefer to learn: creating presentations with Canva or editing short videos? Explain your reasons.';
  const skills = [
    {
      name: '使用 Canva 製作簡報',
      lines: [
        'I would prefer to learn how to create presentations with Canva.',
        'The main reason is that it can help me organize information clearly.',
        'For example, I can arrange key points, pictures, and charts on different slides.',
        'As a result, I can present my ideas more clearly and confidently.'
      ],
      reasons: [
        'The main reason is that it can help me record important moments creatively.',
        'The main reason is that it can help me organize information clearly.',
        'The main reason is that it can help me connect several video clips into one story.'
      ],
      reasonRight: 1,
      reasonNotes: [
        '這個理由比較適合攝影或影片創作。請回到「製作簡報」需要的能力。',
        '答對了！Canva 簡報的重點是整理資訊，讓內容更清楚。',
        '這個理由比較適合短影片剪輯。請想想 Canva 如何幫助整理資訊。'
      ],
      examples: [
        'For example, I can combine short clips and add subtitles to tell a complete story.',
        'For example, I can choose camera angles and background sounds to keep viewers interested.',
        'For example, I can arrange key points, pictures, and charts on different slides.'
      ],
      exampleRight: 2,
      exampleNotes: [
        '這個例子是在說短影片剪輯，沒有直接支持 Canva 如何整理資訊。',
        '這個例子偏向影片拍攝，沒有直接說明如何整理簡報內容。',
        '答對了！把重點、圖片和圖表安排在不同投影片，具體支持「整理資訊」。'
      ],
      results: [
        'As a result, I can present my ideas more clearly and confidently.',
        'As a result, I can turn everyday moments into creative video stories.',
        'As a result, I can make moving images more engaging for online viewers.'
      ],
      resultRight: 0,
      resultNotes: [
        '答對了！資訊整理清楚後，就能更清楚、更有自信地表達想法。',
        '這個結果比較適合短影片創作，沒有接續簡報與資訊整理。',
        '這個結果著重動態影像，沒有接續前面的 Canva 簡報內容。'
      ]
    },
    {
      name: '剪輯短影片',
      lines: [
        'I would prefer to learn how to edit short videos.',
        'The main reason is that short videos allow me to record and share meaningful moments.',
        'For example, I can combine clips from a trip with music, captions, and pictures.',
        'As a result, I can preserve special memories in a more interesting way.'
      ],
      reasons: [
        'The main reason is that slides help me organize key points into a clear order.',
        'The main reason is that charts help an audience compare information quickly.',
        'The main reason is that short videos allow me to record and share meaningful moments.'
      ],
      reasonRight: 2,
      reasonNotes: [
        '這個理由比較適合簡報製作。請想想短影片特別適合怎樣表達。',
        '這個理由著重圖表整理，較適合 Canva 簡報。',
        '答對了！學生可以利用短影片記錄生活，並分享對自己有意義的時刻。'
      ],
      examples: [
        'For example, I can combine clips from a trip with music, captions, and pictures.',
        'For example, I can place key points and charts on separate slides for a class report.',
        'For example, I can use a simple slide layout to compare two possible choices.'
      ],
      exampleRight: 0,
      exampleNotes: [
        '答對了！結合旅行片段、音樂、字幕和圖片，具體說明如何記錄有意義的時刻。',
        '這個例子是在安排簡報投影片，沒有直接支持短影片創作。',
        '這個例子偏向簡報設計，沒有呈現短影片的製作方式。'
      ],
      results: [
        'As a result, I can arrange written information into a clear slide presentation.',
        'As a result, I can preserve special memories in a more interesting way.',
        'As a result, I can compare facts quickly by placing them in a simple chart.'
      ],
      resultRight: 1,
      resultNotes: [
        '這個結果接續的是簡報製作，不是短影片剪輯。',
        '答對了！整理旅行片段後，可以用更有趣的方式保存珍貴回憶。',
        '這個結果接續的是圖表整理，沒有接續影片與字幕的例子。'
      ]
    }
  ];

  const courses = [
    {
      name: '烹飪課', english: 'a cooking class',
      zh: ['我希望學校開設烹飪課。','主要原因是烹飪是日常生活中很實用的技能。','例如，學生可以學習如何準備簡單又健康的餐點。','如此一來，他們可能變得更獨立，也能更妥善地照顧自己。'],
      hints: [['offer a cooking class'],['a useful skill in daily life'],['prepare simple and healthy meals'],['become more independent','take better care of themselves']],
      lines: ['I would like my school to offer a cooking class.','The main reason is that cooking is a useful skill in daily life.','For example, students can learn how to prepare simple and healthy meals.','As a result, they may become more independent and take better care of themselves.']
    },
    {
      name: '攝影課', english: 'a photography class',
      zh: ['我希望學校開設攝影課。','主要原因是攝影能幫助學生觀察周遭事物並發揮創意。','例如，他們可以學習如何運用光線和角度拍出清楚的照片。','如此一來，他們可以透過影像更有效地分享故事和想法。'],
      hints: [['offer a photography class'],['observe the world around them','develop their creativity'],['use light and angles','take clear photos'],['share stories and ideas','through images']],
      lines: ['I would like my school to offer a photography class.','The main reason is that photography can help students observe the world around them and develop their creativity.','For example, they can learn how to use light and angles to take clear photos.','As a result, they can share stories and ideas more effectively through images.']
    },
    {
      name: '急救知識課', english: 'a first-aid class',
      zh: ['我希望學校開設急救知識課。','主要原因是學生可以學習在別人需要幫助時冷靜地做出反應。','例如，他們可以學習辨認緊急情況，並迅速向大人求助。','如此一來，他們可以更有準備，也能以負責任的方式幫助別人。'],
      hints: [['offer a first-aid class'],['respond calmly','when someone needs help'],['recognize an emergency','ask an adult for help quickly'],['feel more prepared','help others responsibly']],
      lines: ['I would like my school to offer a first-aid class.','The main reason is that students can learn to respond calmly when someone needs help.','For example, they can learn to recognize an emergency and ask an adult for help quickly.','As a result, they can feel more prepared and help others responsibly.']
    },
    {
      name: 'AI 工具課', english: 'an AI skills class',
      zh: ['我希望學校開設 AI 工具課。','主要原因是學生需要學習如何負責任且有效率地使用數位工具。','例如，他們可以練習提出清楚的問題、比較資料並檢查答案是否正確。','如此一來，他們可以運用 AI 協助學習，而不會完全依賴它。'],
      hints: [['offer an AI skills class'],['use digital tools','responsibly and efficiently'],['ask clear questions','compare information','check whether answers are correct'],['use AI to support their learning','without depending on it completely']],
      lines: ['I would like my school to offer an AI skills class.','The main reason is that students need to learn how to use digital tools responsibly and efficiently.','For example, they can practice asking clear questions, comparing information, and checking whether answers are correct.','As a result, they can use AI to support their learning without depending on it completely.']
    }
  ];

  const context = (title, lines) => `<div class="context"><b>${title}</b>${lines.map(s => `<div>${s}</div>`).join('')}</div>`;
  const numbered = lines => lines.map((s, i) => `${i + 1}. ${s}`);
  const task = (n, title, body) => `<article class="stage" data-task="${n}"><span class="tag">任務 ${n}：${title}</span>${body}<button type="button" class="task-back" data-back="${Math.ceil(n / 2) - 1}">${n < 3 ? '← 回到上一頁（首頁）' : '← 回到上一頁'}</button></article>`;
  const section = document.createElement('section');
  section.className = 'lesson';
  section.id = 'lesson10';
  section.style.cssText = 'max-width:840px;margin:0 auto';
  section.innerHTML = `
    <div class="lesson-head"><small>第10回：四句話寫作</small><h1>換個題目，也能寫出四句</h1><p>選擇 → 理由 → 具體例子 → 結果</p></div>
    <div class="progress-row"><div class="bar"><i id="bar10"></i></div><span class="progress-text" id="progress10"></span></div>
    <div class="question-banner" id="banner10"><strong>本回重點</strong><span id="bannerText10">先看懂題目，再把同一種發展方式用在不同主題。</span></div>
    ${task(1, '看懂題目', `<h2>這個題目要你完成什麼？</h2>${context('題目', [prompt])}<div class="choices r10-single"><button class="choice">比較 Canva 和短影片的所有優缺點。</button><button class="choice" data-correct="true">選擇一項數位技能，並用理由和例子支持自己的選擇。</button><button class="choice">說明製作簡報和剪輯影片的詳細操作步驟。</button></div><div class="feedback" role="status" aria-live="polite"></div><button type="button" class="retry-btn" hidden>重做一次</button>`)}
    ${task(2, '選擇數位技能', `<h2>你比較想學哪一項技能？</h2>${context('題目', [prompt])}<p class="instruction">兩種選擇都可以。選定後，繼續找出能互相接續的理由、例子和結果。</p><div class="choices" id="skillChoices10"></div><div class="feedback" id="skillFeedback10" role="status"></div>`)}
    ${task(3, '選擇合適的理由', `<h2>哪一個理由最能支持你的選擇？</h2>${context('題目', [prompt])}<div id="reasonTask10"></div>`)}
    ${task(4, '用具體例子支持理由', `<h2>哪個例子能具體支持前面的理由？</h2>${context('題目', [prompt])}<div id="exampleTask10"></div>`)}
    ${task(5, '接續合理的結果', `<h2>哪個結果能接續前面的內容？</h2>${context('題目', [prompt])}<div id="resultTask10"></div>`)}
    ${task(6, '組合完整段落', `<h2>點選字條，排成完整的四句話。</h2>${context('題目', [prompt])}<p class="instruction">點選字條加入段落；放錯時，再點一次已放入的字條，就能退回。</p><div id="sortTask10"></div><button class="secondary" id="switchSkill10" type="button">換一項技能再試一次</button>`)}
    ${task(7, '換題目，選擇一門課', `<h2>如果學校新增一門實用技能課，你會選哪一門？</h2>${context('題目', ['If your school could offer a new practical course, what course would you choose? Explain your reasons.'])}<p class="instruction">先做出自己的選擇。下一個任務不再用選擇題，而是由你完成四句英文。</p><div class="choices" id="courseChoices10"></div><div class="feedback" id="courseFeedback10" role="status"></div>`)}
    ${task(8, '把想法寫成四句英文', `<h2>先自己寫，再視需要查看語塊。</h2><p class="translation-note">請把答案寫在學習單或筆記本上。語塊只是句子的材料，請先想想如何把它們組成完整句子。</p><div id="courseWriting10"></div>`)}
    <article class="stage complete" data-task="9"><div class="check">✓</div><span class="tag">第十回完成</span><h2>你已經能把同一種寫法移植到新題目！</h2><p>看到選擇題時，先決定立場，再用理由、具體例子和結果把內容連起來。</p><div class="takeaways"><div class="take p1">Choice<br>選擇</div><div class="take p2">Reason<br>理由</div><div class="take p3">Example<br>例子</div><div class="take p4">Result<br>結果</div></div><div class="translation-note" style="text-align:left;margin-top:24px"><h3>回家任務：設計一款學生需要的 App</h3>${context('題目', ['If you could design an app for students, what would it do? Explain how it could help them.'])}<p>請完成四句英文：</p><ol><li>說明你的 App 構想。</li><li>指出它想解決的學生問題。</li><li>舉例說明一項具體功能。</li><li>說明它能為學生帶來什麼幫助。</li></ol><p><b>需要時可以使用：</b>plan study time、remember assignments and test dates、organize tasks、send reminders、manage time better、feel less stressed</p></div><div class="mini-actions" style="justify-content:center"><button class="secondary" id="backFromComplete10">← 上一頁</button><button class="nav-btn primary" id="homeworkAnswer10">查看回家任務參考解答</button><button class="home-btn" id="done10">回到首頁</button></div></article>
    <article class="stage" data-task="10"><span class="tag">回家任務：參考解答</span><h2>設計一款幫助學生規劃時間的 App</h2>${context('題目', ['If you could design an app for students, what would it do? Explain how it could help them.'])}<div class="translation-list"><div class="translation-card"><h3>1. App 構想</h3><p class="zh-prompt">我想設計一款幫助學生規劃讀書時間的 App。</p><div class="answer-box show"><strong>I would like to design an app that helps students plan their study time.</strong></div></div><div class="translation-card"><h3>2. 想解決的問題</h3><p class="zh-prompt">許多學生不容易記住作業和考試日期。</p><div class="answer-box show"><strong>Many students have difficulty remembering their assignments and test dates.</strong></div></div><div class="translation-card"><h3>3. 具體功能</h3><p class="zh-prompt">例如，這款 App 可以整理他們的任務，並在每個截止日期前發出提醒。</p><div class="answer-box show"><strong>For example, the app could organize their tasks and send reminders before each deadline.</strong></div></div><div class="translation-card"><h3>4. 帶來的幫助</h3><p class="zh-prompt">如此一來，學生便能更妥善地管理時間，並減輕壓力。</p><div class="answer-box show"><strong>As a result, students could manage their time better and feel less stressed.</strong></div></div></div>${context('完整參考段落', ['I would like to design an app that helps students plan their study time. Many students have difficulty remembering their assignments and test dates. For example, the app could organize their tasks and send reminders before each deadline. As a result, students could manage their time better and feel less stressed.'])}<p class="answer-note" style="display:block;margin-top:18px">參考答案不是唯一寫法。請檢查自己的四句是否依序說明 App 構想、學生遇到的問題、具體功能及帶來的幫助。</p><div class="mini-actions"><button class="secondary" id="backToComplete10">← 上一頁</button><button class="home-btn" id="doneAnswer10">回到首頁</button></div></article>
    <nav class="page-nav" id="nav10" aria-label="第十回練習頁面導覽"><button class="nav-btn" id="prev10">← 上一頁</button><button class="nav-home" id="home10">回到首頁</button><button class="nav-btn primary" id="next10">下一頁 →</button></nav>`;
  document.querySelector('main').appendChild(section);

  const style = document.createElement('style');
  style.textContent = `#lesson10 [hidden]{display:none!important} #lesson10 .choice[aria-pressed="true"]{border-color:#527ba1;background:#edf4fa} #lesson10 .course-name{display:block;font-weight:900;font-size:1.08rem} #lesson10 .course-en{display:block;color:#62788b;font-weight:700;margin-top:2px} #lesson10 .answer-box.show{display:block} #lesson10 .context div{margin-top:5px}`;
  document.head.appendChild(style);

  const $ = id => section.querySelector('#' + id);
  let page = 1;
  function show(n) {
    page = n;
    section.querySelectorAll('.stage').forEach(stage => {
      const k = +stage.dataset.task;
      stage.classList.toggle('on', n <= 4 ? Math.ceil(k / 2) === n : (n === 5 ? k === 9 : k === 10));
    });
    $('bar10').style.width = `${Math.min(n, 4) / 4 * 100}%`;
    $('progress10').textContent = n <= 4 ? `第 ${n} 頁／共 4 頁` : (n === 5 ? '完成' : '回家任務參考解答');
    $('nav10').classList.toggle('hidden', n >= 5);
    $('banner10').hidden = n >= 5;
    $('prev10').disabled = n === 1;
    $('next10').disabled = n === 4;
    $('bannerText10').textContent = n === 4 ? '換成新的題目，練習把相同的四句邏輯移植過去。' : '先看懂題目，再把同一種發展方式用在不同主題。';
    scrollTo({top: 0, behavior: 'smooth'});
  }

  const previousClose = closeLessons;
  closeLessons = function () { previousClose(); section.classList.remove('on'); };
  const card = document.querySelectorAll('#cards2 .card')[6];
  card.disabled = false;
  card.classList.add('active');
  card.querySelector('h3').textContent = '換個題目，也能寫出四句';
  card.querySelector('.path').textContent = '選擇 → 理由 → 例子 → 結果';
  card.querySelector('.status').textContent = '開始練習';
  card.onclick = () => { closeLessons(); home.classList.remove('on'); section.classList.add('on'); homeBtn.hidden = false; show(1); };
  document.querySelector('#home .footer-note').textContent = '第1～10回已開放。';

  $('prev10').onclick = () => show(page - 1);
  $('next10').onclick = () => show(page + 1);
  $('home10').onclick = $('done10').onclick = $('doneAnswer10').onclick = goHome;
  $('backFromComplete10').onclick = () => show(4);
  $('homeworkAnswer10').onclick = () => show(6);
  $('backToComplete10').onclick = () => show(5);
  section.querySelectorAll('[data-back]').forEach(button => button.onclick = () => +button.dataset.back === 0 ? goHome() : show(+button.dataset.back));

  function wireSingleChoice(group, feedback, retry, onCorrect) {
    const buttons = [...group.querySelectorAll('.choice')];
    buttons.forEach(button => button.onclick = () => {
      const ok = button.dataset.correct === 'true';
      buttons.forEach(item => item.disabled = true);
      button.classList.add(ok ? 'correct' : 'wrong');
      feedback.className = 'feedback show ' + (ok ? 'ok' : 'no');
      feedback.textContent = ok ? '✓ 答對了！題目要你選擇一項技能，並用理由和例子支持自己的選擇。' : '✗ 再想一次：題目不是要求操作步驟或完整比較，而是要你做出選擇並解釋原因。';
      retry.hidden = false;
      if (ok && onCorrect) onCorrect();
    });
    retry.onclick = () => {
      buttons.forEach(item => { item.disabled = false; item.classList.remove('correct', 'wrong'); });
      feedback.className = 'feedback';
      retry.hidden = true;
    };
  }
  const firstGroup = section.querySelector('.r10-single');
  wireSingleChoice(firstGroup, firstGroup.nextElementSibling, firstGroup.nextElementSibling.nextElementSibling);

  function choiceBlock(host, items, right, notes, onCorrect, onReset) {
    host.innerHTML += `<div class="choices"></div><div class="feedback" role="status" aria-live="polite"></div><button class="retry-btn" type="button" hidden>重做一次</button>`;
    const group = host.querySelector('.choices');
    const feedback = host.querySelector('.feedback');
    const retry = host.querySelector('.retry-btn');
    items.forEach((text, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'choice';
      button.textContent = text;
      button.onclick = () => {
        const ok = index === right;
        [...group.children].forEach(item => item.disabled = true);
        button.classList.add(ok ? 'correct' : 'wrong');
        feedback.className = 'feedback show ' + (ok ? 'ok' : 'no');
        feedback.textContent = notes[index];
        retry.hidden = false;
        if (ok) onCorrect();
      };
      group.appendChild(button);
    });
    retry.onclick = () => {
      [...group.children].forEach(item => { item.disabled = false; item.classList.remove('correct', 'wrong'); });
      feedback.className = 'feedback';
      retry.hidden = true;
      onReset();
    };
  }

  let selectedSkill = null;
  let reasonDone = false;
  let exampleDone = false;
  let resultDone = false;
  let order = [];
  skills.forEach((skill, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice';
    button.innerHTML = `<span class="course-name">${skill.name}</span><span class="course-en">${skill.lines[0]}</span>`;
    button.setAttribute('aria-pressed', 'false');
    button.onclick = () => {
      selectedSkill = index;
      reasonDone = exampleDone = resultDone = false;
      order = [];
      [...$('skillChoices10').children].forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
      $('skillFeedback10').className = 'feedback show ok';
      $('skillFeedback10').textContent = `已選擇「${skill.name}」。接著找出能互相接續的理由、例子和結果。`;
      renderSkillTasks();
    };
    $('skillChoices10').appendChild(button);
  });

  function renderSkillTasks() {
    if (selectedSkill === null) {
      $('reasonTask10').innerHTML = '<p>請先在任務二選擇一項數位技能。</p>';
      $('exampleTask10').innerHTML = '<p>請先選擇技能，再完成理由。</p>';
      $('resultTask10').innerHTML = '<p>請先完成理由與例子的選擇。</p>';
      renderSort();
      return;
    }
    const data = skills[selectedSkill];
    $('reasonTask10').innerHTML = context('目前的內容', numbered([data.lines[0]]));
    choiceBlock($('reasonTask10'), data.reasons, data.reasonRight, data.reasonNotes, () => { reasonDone = true; renderExample(); }, () => { reasonDone = exampleDone = resultDone = false; order = []; renderExample(); });
    renderExample();
  }

  function renderExample() {
    const host = $('exampleTask10');
    const data = skills[selectedSkill];
    if (!reasonDone) { host.innerHTML = '<p>請先在任務三選出合適的理由。</p>'; renderResult(); return; }
    host.innerHTML = context('目前的內容', numbered(data.lines.slice(0, 2)));
    choiceBlock(host, data.examples, data.exampleRight, data.exampleNotes, () => { exampleDone = true; renderResult(); }, () => { exampleDone = resultDone = false; order = []; renderResult(); });
    renderResult();
  }

  function renderResult() {
    const host = $('resultTask10');
    if (selectedSkill === null || !exampleDone) { host.innerHTML = '<p>請先在任務四選出能支持理由的具體例子。</p>'; renderSort(); return; }
    const data = skills[selectedSkill];
    host.innerHTML = context('目前的內容', numbered(data.lines.slice(0, 3)));
    choiceBlock(host, data.results, data.resultRight, data.resultNotes, () => { resultDone = true; renderSort(); }, () => { resultDone = false; order = []; renderSort(); });
    renderSort();
  }

  function renderSort() {
    const host = $('sortTask10');
    if (selectedSkill === null || !resultDone) { host.innerHTML = '<p>完成前面的理由、例子和結果後，就可以排列四句話。</p>'; return; }
    const lines = skills[selectedSkill].lines;
    host.innerHTML = '<p id="sortCount10" role="status"></p><h3>你的排列（點選已放入的句子可退回）</h3><div class="slots" id="ordered10"></div><h3>待選句子</h3><div class="choices" id="pool10"></div><div class="mini-actions"><button class="secondary" id="checkSort10" type="button">檢查排列</button><button class="secondary" id="resetSort10" type="button">重新排列</button></div><div class="feedback" id="sortFeedback10" role="status"></div><div class="full-answer" id="sortedParagraph10"></div>';
    $('sortCount10').textContent = `已放入 ${order.length}／4 句`;
    Array.from({length: 4}, (_, index) => {
      const lineIndex = order[index];
      const element = document.createElement(lineIndex === undefined ? 'div' : 'button');
      element.className = 'slot' + (lineIndex === undefined ? '' : ' filled');
      element.style.cssText = 'text-align:left;font:inherit;line-height:1.7';
      element.textContent = lineIndex === undefined ? `${index + 1}. 尚未放入句子` : `${index + 1}. ${lines[lineIndex]}`;
      if (lineIndex !== undefined) { element.type = 'button'; element.onclick = () => { order.splice(index, 1); renderSort(); }; }
      $('ordered10').appendChild(element);
    });
    [2, 0, 3, 1].forEach(lineIndex => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'choice';
      button.disabled = order.includes(lineIndex);
      button.textContent = (button.disabled ? '✓ 已放入：' : '') + lines[lineIndex];
      button.onclick = () => { if (!order.includes(lineIndex)) { order.push(lineIndex); renderSort(); } };
      $('pool10').appendChild(button);
    });
    $('resetSort10').onclick = () => { order = []; renderSort(); };
    $('checkSort10').onclick = () => {
      const feedback = $('sortFeedback10');
      if (order.length < 4) {
        feedback.className = 'feedback show no';
        feedback.textContent = `目前已放入 ${order.length} 句，還差 ${4 - order.length} 句。請從「待選句子」繼續點選。`;
        return;
      }
      const wrong = order.filter((lineIndex, index) => lineIndex !== index).length;
      feedback.className = 'feedback show ' + (wrong ? 'no' : 'ok');
      feedback.textContent = wrong ? `目前有 ${wrong} 句位置需要調整。點選放錯的字條，讓它退回後再重新排列。` : '排列完成！選擇、理由、例子和結果沿著同一個想法發展。';
      if (!wrong) { $('sortedParagraph10').innerHTML = lines.map(line => `<p>${line}</p>`).join(''); $('sortedParagraph10').classList.add('show'); }
    };
  }

  $('switchSkill10').onclick = () => {
    selectedSkill = null;
    reasonDone = exampleDone = resultDone = false;
    order = [];
    [...$('skillChoices10').children].forEach(item => item.setAttribute('aria-pressed', 'false'));
    $('skillFeedback10').className = 'feedback';
    renderSkillTasks();
    show(1);
    section.querySelector('[data-task="2"]').scrollIntoView({behavior: 'smooth', block: 'start'});
  };
  renderSkillTasks();

  let selectedCourse = null;
  courses.forEach((course, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice';
    button.innerHTML = `<span class="course-name">${course.name}</span><span class="course-en">${course.english}</span>`;
    button.setAttribute('aria-pressed', 'false');
    button.onclick = () => {
      selectedCourse = index;
      [...$('courseChoices10').children].forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
      $('courseFeedback10').className = 'feedback show ok';
      $('courseFeedback10').textContent = `已選擇「${course.name}」。請在下一個任務先自己完成四句英文。`;
      renderCourseWriting();
    };
    $('courseChoices10').appendChild(button);
  });

  function renderCourseWriting() {
    const host = $('courseWriting10');
    if (selectedCourse === null) { host.innerHTML = '<p>請先在任務七選擇一門課程。</p>'; return; }
    const course = courses[selectedCourse];
    const labels = ['選擇','理由','具體例子','結果'];
    host.innerHTML = `<div class="context"><b>你選擇的課程</b><div>${course.name}：${course.english}</div></div><div class="translation-list">${course.zh.map((zh, index) => `<div class="translation-card"><h3>${index + 1}. ${labels[index]}</h3><p class="zh-prompt">${zh}</p><div class="reveal-actions"><button class="hint-btn" type="button">查看語塊提示</button><button class="answer-btn" type="button">我寫好了，查看參考答案</button></div><div class="hint-box"><b>可以使用：</b><ul>${course.hints[index].map(hint => `<li>${hint}</li>`).join('')}</ul></div><div class="answer-box"><strong>${course.lines[index]}</strong></div></div>`).join('')}</div><div class="mini-actions"><button class="secondary" id="changeCourse10" type="button">換一門課程再練一次</button><button class="reveal-btn" id="fullCourse10" type="button">四句都寫好了，查看完整參考段落</button></div><div class="full-answer" id="fullCourseAnswer10">${course.lines.map(line => `<p>${line}</p>`).join('')}<span class="answer-note">參考答案不是唯一寫法。請檢查內容是否依序說明選擇、理由、具體例子和結果。</span></div><button class="next" id="finish10" type="button">完成第十回，查看回家任務</button>`;
    host.querySelectorAll('.translation-card').forEach(card => {
      const hintButton = card.querySelector('.hint-btn');
      const answerButton = card.querySelector('.answer-btn');
      const hintBox = card.querySelector('.hint-box');
      const answerBox = card.querySelector('.answer-box');
      hintButton.onclick = () => { const open = hintBox.classList.toggle('show'); hintButton.textContent = open ? '收起語塊提示' : '查看語塊提示'; };
      answerButton.onclick = () => { const open = answerBox.classList.toggle('show'); answerButton.textContent = open ? '收起參考答案' : '我寫好了，查看參考答案'; };
    });
    host.querySelector('#changeCourse10').onclick = () => {
      selectedCourse = null;
      [...$('courseChoices10').children].forEach(item => item.setAttribute('aria-pressed', 'false'));
      $('courseFeedback10').className = 'feedback';
      renderCourseWriting();
      section.querySelector('[data-task="7"]').scrollIntoView({behavior: 'smooth', block: 'start'});
    };
    host.querySelector('#fullCourse10').onclick = event => {
      const answer = host.querySelector('#fullCourseAnswer10');
      const open = answer.classList.toggle('show');
      event.currentTarget.textContent = open ? '收起完整參考段落' : '四句都寫好了，查看完整參考段落';
      host.querySelector('#finish10').classList.toggle('show', open);
    };
    host.querySelector('#finish10').onclick = () => show(5);
  }
  renderCourseWriting();
  show(1);
})();
