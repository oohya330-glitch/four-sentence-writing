// Lesson nine extends the existing classroom layout without changing lessons 1–8.
(() => {
  const demo = [
    'I think students should be allowed to use smartphones in class.',
    'The main reason is that smartphones can make lessons more interactive.',
    'For example, students can take photos of the board and review their notes after class.',
    'As a result, they may become more willing to take part in classroom activities.'
  ];
  const good = 'For example, students can use their phones to join learning games and receive immediate feedback from the teacher.';
  const video = 'For example, students can watch instructional videos and review difficult concepts at their own pace.';
  const practice = ['I prefer studying with my classmates.', 'The main reason is that group study helps me understand difficult ideas.', 'For example, we can make a study schedule and remind one another about test dates.', 'As a result, I can understand the lessons better and feel more confident.'];
  const revision = 'For example, we can explain confusing ideas to one another and use simple examples to make them clearer.';
  const prompt = 'Should students be allowed to use smartphones in class?';
  const context = (title, lines) => `<div class="context"><b>${title}</b>${lines.map(s=>`<div>${s}</div>`).join('')}</div>`;
  const paragraph = lines => lines.map((s,i)=>`${i+1}. ${s}`);
  const choices = (items, right, explanation) => `<div class="r9-choices choices" data-right="${right}" data-explanation="${explanation}">${items.map((s,i)=>`<button type="button" class="choice" data-index="${i}">${s}</button>`).join('')}</div><div class="feedback" role="status" aria-live="polite"></div><button type="button" class="retry-btn" hidden>重做一次</button>`;
  const task = (n,title,body) => `<article class="stage" data-task="${n}"><span class="tag">任務 ${n}｜${title}</span>${body}<button type="button" class="task-back" data-back="${Math.ceil(n/2)-1}">${n<3?'← 回到上一頁（首頁）':'← 回到上一頁'}</button></article>`;
  const section=document.createElement('section'); section.className='lesson'; section.id='lesson9'; section.style.cssText='max-width:840px;margin:0 auto';
  section.innerHTML=`<div class="lesson-head"><small>第9回｜四句話寫作</small><h1>讓例子支持理由</h1><p>選擇立場 → 支持理由 → 修正內容</p></div><div class="progress-row"><div class="bar"><i id="bar9"></i></div><span class="progress-text" id="progress9"></span></div><div class="question-banner" id="banner9"><strong>本回重點</strong>例子與主題相關，不代表它能直接支持前一句的理由。</div>`+
  task(1,'讀懂題目',`<h2>題目要求你寫什麼？</h2>${context('題目',[prompt])}${choices(['Describe how students use smartphones during a typical school day.','Explain whether smartphones should be allowed in class and support your opinion.','Compare the ways students use smartphones in class and after school.'],1,'題目問是否應該允許使用手機，需要表達立場並提出支持理由。')}`)+
  task(2,'選擇立場與理由',`<h2>你贊成還是不贊成？</h2>${context('題目',[prompt])}<p class="instruction">兩種立場都可以。選定後，用例子支持你的理由。</p><div class="choices" id="stance9"></div><div class="feedback" id="stanceFeedback9" role="status"></div>`)+
  task(3,'選擇支持理由的例子',`<h2>哪個例子最能支持你的理由？</h2>${context('題目',[prompt])}<div id="exampleTask9"></div>`)+
  task(4,'接續前文的結果',`<h2>哪個結果能接續前面的內容？</h2>${context('題目',[prompt])}<div id="resultTask9"></div>`)+
  task(5,'把四句連起來',`<h2>點選字條，排成完整段落。</h2>${context('題目',[prompt])}<p class="instruction">點選字條加入段落；放錯時，再點一次已放入的字條，就能退回。</p><div id="sortTask9"></div><button class="secondary" id="switch9" type="button">換個立場再練一次</button>`)+
  task(6,'用具體例子支持理由',`<h2>先看示範，再寫另一個例子。</h2>${context('題目',['Do you prefer studying alone or with classmates? Explain your reasons.'])}${context('四句示範',paragraph([practice[0],practice[1],revision,practice[3]]))}<div class="translation-note" style="margin-top:20px">保留第一、二、四句。請將下面的中文翻成英文，作為另一種第三句。寫在學習單或筆記本上。</div><div class="translation-card"><h3>翻譯練習｜另一個支持理由的例子</h3><p>例如，當我不明白一道數學題時，同學可以一步一步說明解題方法。</p><div class="reveal-actions"><button class="hint-btn" id="hint9">給我提示</button><button class="answer-btn" id="answer9">我寫好了，查看參考答案</button></div><div class="hint-box" id="hintBox9">先交代「什麼時候需要幫助」，再說明「同學怎麼幫忙」。<div class="hint-level2" id="hintMore9">understand a math problem／explain how to solve it／step by step</div></div><div class="answer-box" id="answerBox9"><strong>For example, when I do not understand a math problem, a classmate can explain how to solve it step by step.</strong><p>例如，當我不明白一道數學題時，一位同學可以一步一步說明解題方法。</p><span class="answer-note">參考答案不是唯一寫法；請確認自己的句子表達相同意思，並支持前面的理由。</span></div></div><p class="instruction" style="margin-top:20px">說說看：這個例子如何支持「理解困難的概念」？</p><button class="nav-btn primary" id="finish9" style="margin-top:18px">完成第九回，查看回家任務</button>`)+
  `<article class="stage complete" data-task="7"><div class="check">✓</div><span class="tag">第九回完成</span><h2>例子要支持理由，不只是提到同一個主題。</h2><p>回頭檢查：例子具體證明了什麼？它和我的理由一致嗎？</p><div class="translation-note" style="text-align:left"><h3>回家任務｜線上或教室學習</h3>${context('題目',['Do you prefer learning online or studying in a classroom?'])}${context('請檢查這四句',paragraph(['I prefer learning online.','The main reason is that I can learn at my own pace.','For example, I can attend lessons at home without traveling to school.','As a result, I can spend more time on topics that I find difficult.']))}<ol><li>找出支持較不直接的一句。</li><li>用中文簡短說明原因。</li><li>改寫那一句英文，再把完整四句抄寫在一起，下次上課帶來檢討。</li></ol></div><div class="mini-actions"><button class="secondary" id="backFromComplete9">← 上一頁</button><button class="nav-btn primary" id="homeworkAnswer9">查看回家任務參考解答</button><button class="home-btn" id="done9">回到首頁</button></div></article>`+
  `<article class="stage" data-task="8"><span class="tag">回家任務：參考解答</span><h2>讓例子直接支持理由</h2>${context('題目',['Do you prefer learning online or studying in a classroom?'])}${context('原來的四句話',paragraph(['I prefer learning online.','The main reason is that I can learn at my own pace.','For example, I can attend lessons at home without traveling to school.','As a result, I can spend more time on topics that I find difficult.']))}<div class="translation-note"><h3>1. 哪一句需要修改？</h3><p><strong>第三句。</strong></p><h3>2. 為什麼需要修改？</h3><p>第二句的理由是 <strong>I can learn at my own pace.</strong>，但是第三句只說明「在家上課，不必前往學校」，比較能支持線上學習很方便，沒有直接說明學生如何按照自己的速度學習。</p><h3>3. 修改後的第三句</h3><p><strong>For example, I can pause a recorded lesson and replay difficult parts until I understand them.</strong></p><p>例如，我可以暫停錄製的課程，並重複播放較難的部分，直到自己理解為止。</p></div>${context('修改後的完整四句話',paragraph(['I prefer learning online.','The main reason is that I can learn at my own pace.','For example, I can pause a recorded lesson and replay difficult parts until I understand them.','As a result, I can spend more time on topics that I find difficult.']))}<p class="answer-note" style="display:block;margin-top:18px">參考答案不是唯一寫法。重點是第三句要具體說明「如何按照自己的速度學習」。</p><div class="mini-actions"><button class="secondary" id="backToHomework9">← 上一頁</button><button class="home-btn" id="doneAnswer9">回到首頁</button></div></article><nav class="page-nav" id="nav9" aria-label="第九回練習頁面導覽"><button class="nav-btn" id="prev9">← 上一頁</button><button class="nav-home" id="home9">回到首頁</button><button class="nav-btn primary" id="next9">下一頁 →</button></nav>`;
  document.querySelector('main').appendChild(section);
  const $=id=>section.querySelector('#'+id); let page=1;
  function show(n){page=n;section.querySelectorAll('.stage').forEach(s=>s.classList.toggle('on',n>=4?+s.dataset.task===n+3:Math.ceil(+s.dataset.task/2)===n));$('bar9').style.width=`${Math.min(n,3)/3*100}%`;$('progress9').textContent=n===4?'完成':n===5?'回家任務參考解答':`第 ${n} 頁／共 3 頁`;$('nav9').classList.toggle('hidden',n>=4);$('banner9').hidden=n>=4;$('prev9').disabled=n===1;$('next9').disabled=n===3;scrollTo({top:0,behavior:'smooth'});}
  const previousClose=closeLessons; closeLessons=function(){previousClose();section.classList.remove('on');};
  const card=document.querySelectorAll('#cards2 .card')[5];card.disabled=false;card.classList.add('active');card.querySelector('h3').textContent='讓例子支持理由';card.querySelector('.path').textContent='選擇立場 → 支持理由';card.querySelector('.status').textContent='開始練習';card.onclick=()=>{closeLessons();home.classList.remove('on');section.classList.add('on');homeBtn.hidden=false;show(1);};
  document.querySelector('#home .footer-note').textContent='第1～9回已開放，其他回合將陸續完成。';
  $('prev9').onclick=()=>show(page-1);$('next9').onclick=()=>show(page+1);$('home9').onclick=$('done9').onclick=$('doneAnswer9').onclick=goHome;$('finish9').onclick=()=>show(4);$('backFromComplete9').onclick=()=>show(3);$('homeworkAnswer9').onclick=()=>show(5);$('backToHomework9').onclick=()=>show(4);
  section.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>+b.dataset.back===0?goHome():show(+b.dataset.back));
  function resetChoice(group){group.querySelectorAll('button').forEach(b=>{b.disabled=false;b.classList.remove('correct','wrong');});group.nextElementSibling.className='feedback';group.nextElementSibling.nextElementSibling.hidden=true;}
  section.querySelectorAll('.r9-choices').forEach(group=>{const fb=group.nextElementSibling,retry=fb.nextElementSibling;retry.style.display='';group.querySelectorAll('button').forEach(b=>b.onclick=()=>{const ok=b.dataset.index===group.dataset.right;const isFirstTask=group.closest('[data-task="1"]');group.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add(ok?'correct':'wrong');fb.className='feedback show '+(ok?'ok':'no');fb.textContent=isFirstTask?(ok?'✓ 答對了！這題要你表達是否贊成學生在課堂上使用手機，並提出支持理由。':'✗ 再想一次：題目不是要你描述或比較手機的使用方式，而是要你表達贊成或不贊成。'):ok?group.dataset.explanation:'再比較一下：題目要求什麼？例子實際支持哪一個理由？';retry.hidden=false;});retry.onclick=()=>resetChoice(group);});
  // Existing retry CSS uses display:block; explicitly honor hidden for this lesson.
  const style=document.createElement('style');style.textContent='#lesson9 [hidden]{display:none!important} #lesson9 .choice[aria-pressed="true"]{border-color:#527ba1;background:#edf4fa} #lesson9 .full-answer p,#lesson9 .answer-box strong{font-size:1.08rem;line-height:1.8} #lesson9 [data-task="1"] .feedback{font-size:1.08rem;border:2px solid currentColor;line-height:1.7}';document.head.appendChild(style);
  const paths = [
    {lines:[demo[0],demo[1]], examples:[
      'For example, students can take photos of the board and review important notes after class.', video, good
    ], exampleRight:2, exampleNotes:['這個例子主要支持方便記錄與複習，還沒有直接呈現課堂互動。','這個例子主要支持自主學習，還沒有直接呈現課堂互動。','參與學習遊戲並獲得老師即時回饋，直接呈現課堂互動。'], results:[
      'As a result, students may find it easier to review their notes and prepare for upcoming tests.',
      'As a result, students may become more willing to respond to the teacher and participate in class.',
      'As a result, students may have more freedom to choose learning materials and study at their own pace.'
    ], resultRight:1, resultNotes:['這是方便複習可能帶來的結果；請回到參與遊戲與即時回饋。','願意回應老師並參與課堂，能接續學習遊戲與即時回饋。','這比較能接續自主學習，請回到課堂互動。']},
    {lines:['I do not think students should be allowed to use smartphones in class.','The main reason is that smartphones can distract students from the lesson.'], examples:[
      'For example, students may check messages while the teacher is explaining a key point and miss important information.',
      'For example, students may have trouble joining an online activity when their phones cannot connect to the school network.',
      'For example, students may find it difficult to read a detailed chart when it appears on a small phone screen.'
    ], exampleRight:0, exampleNotes:['查看訊息而錯過講解，具體說明手機如何使學生分心。','這是連線問題，沒有直接支持分心的理由。','這是螢幕大小的限制，沒有直接支持分心的理由。'], results:[
      'As a result, students may need larger screens to read classroom materials and examine detailed charts.',
      'As a result, students may need a more reliable connection to complete online activities during lessons.',
      'As a result, students may find it harder to follow the lesson and understand the teacher’s explanation.'
    ], resultRight:2, resultNotes:['這比較能接續螢幕限制，請回到錯過老師講解的影響。','這比較能接續連線問題，請回到錯過老師講解的影響。','錯過重要資訊，可能使學生難以跟上課程與理解講解。']}
  ];
  let stance=null,exampleDone=false,resultDone=false,order=[];
  function pickTask(host,items,right,notes,onCorrect,onReset){
    host.insertAdjacentHTML('beforeend',choices(items,right,''));
    const group=host.querySelector('.r9-choices'),fb=group.nextElementSibling,retry=fb.nextElementSibling;
    group.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{const ok=i===right;group.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add(ok?'correct':'wrong');fb.className='feedback show '+(ok?'ok':'no');fb.textContent=notes[i];retry.hidden=false;if(ok)onCorrect();});
    retry.onclick=()=>{resetChoice(group);onReset();};
  }
  function renderBranch(){
    const e=$('exampleTask9'),r=$('resultTask9');
    if(stance===null){e.innerHTML='<p>請先在步驟二選擇立場與理由。</p>';r.innerHTML='<p>請先選擇立場，再完成步驟三。</p>';renderSort();return;}
    const d=paths[stance];e.innerHTML=context('目前的內容',paragraph(d.lines));
    pickTask(e,d.examples,d.exampleRight,d.exampleNotes,()=>{exampleDone=true;renderResult();},()=>{exampleDone=false;resultDone=false;order=[];renderResult();});
    renderResult();
  }
  function renderResult(){
    const host=$('resultTask9'),d=paths[stance];
    if(!exampleDone){host.innerHTML='<p>請先在步驟三選出最能支持理由的例子。</p>';renderSort();return;}
    host.innerHTML=context('目前的內容',paragraph([...d.lines,d.examples[d.exampleRight]]));
    pickTask(host,d.results,d.resultRight,d.resultNotes,()=>{resultDone=true;renderSort();},()=>{resultDone=false;order=[];renderSort();});renderSort();
  }
  function renderSort(){
    const host=$('sortTask9');
    if(!resultDone){host.innerHTML='<p>完成例子與結果的選擇後，就可以排列你選定立場的四句話。</p>';return;}
    const d=paths[stance],lines=[...d.lines,d.examples[d.exampleRight],d.results[d.resultRight]];
    host.innerHTML='<p id="sortCount9" role="status"></p><h3>你的排列（點選已放入的句子可退回）</h3><div class="slots" id="ordered9"></div><h3>待選句子</h3><div class="choices" id="pool9"></div><button class="secondary" id="checkSort9">檢查排列</button><button class="secondary" id="resetSort9">重新排列</button><div class="feedback" id="sortFeedback9" role="status"></div><div class="full-answer" id="sortedParagraph9"></div>';
    $('sortCount9').textContent=`已放入 ${order.length}／4 句`;
    Array.from({length:4},(_,i)=>{const n=order[i];const b=document.createElement(n===undefined?'div':'button');b.className='slot'+(n===undefined?'':' filled');b.style.cssText='text-align:left;font:inherit;line-height:1.7';b.textContent=n===undefined?`${i+1}. 尚未放入句子`:(i+1)+'. '+lines[n];if(n!==undefined){b.type='button';b.onclick=()=>{order.splice(i,1);renderSort();};}$('ordered9').appendChild(b);});
    [2,0,3,1].forEach(n=>{const b=document.createElement('button');b.type='button';b.className='choice';b.disabled=order.includes(n);b.textContent=(b.disabled?'✓ 已放入：':'')+lines[n];b.onclick=()=>{if(!order.includes(n)){order.push(n);renderSort();}};$('pool9').appendChild(b);});
    $('resetSort9').onclick=()=>{order=[];renderSort();};
    $('checkSort9').onclick=()=>{const fb=$('sortFeedback9'),wrong=order.filter((n,i)=>n!==i).length;const ok=order.length===4&&wrong===0;fb.className='feedback show '+(ok?'ok':'no');fb.textContent=order.length<4?`目前已放入 ${order.length} 句，還差 ${4-order.length} 句。請從「待選句子」繼續點選。`:ok?'排列完成！立場、理由、例子和結果沿著同一個想法發展。':`目前有 ${wrong} 句位置需要調整。再點選放錯的字條，就能退回。`;if(ok){$('sortedParagraph9').innerHTML=lines.map(s=>`<p>${s}</p>`).join('');$('sortedParagraph9').classList.add('show');}};
  }
  paths.forEach((d,i)=>{const b=document.createElement('button');b.className='choice';b.innerHTML=d.lines.map(s=>`<span style="display:block">${s}</span>`).join('');b.setAttribute('aria-pressed','false');b.onclick=()=>{stance=i;exampleDone=false;resultDone=false;order=[];[...$('stance9').children].forEach((x,j)=>x.setAttribute('aria-pressed',String(i===j)));$('stanceFeedback9').className='feedback show ok';$('stanceFeedback9').textContent='已選定立場與理由。接著選出能直接支持理由的例子。';renderBranch();};$('stance9').appendChild(b);});
  function clearBranch(){stance=null;exampleDone=false;resultDone=false;order=[];[...$('stance9').children].forEach(x=>x.setAttribute('aria-pressed','false'));$('stanceFeedback9').className='feedback';renderBranch();}
  $('switch9').onclick=()=>{clearBranch();show(1);section.querySelector('[data-task="2"]').scrollIntoView({behavior:'smooth',block:'start'});};renderBranch();
  let hintStep=0;$('hint9').onclick=()=>{$('hintBox9').classList.add('show');hintStep++;if(hintStep===1)$('hint9').textContent='再看一個提示';else{$('hintMore9').classList.add('show');$('hint9').textContent='提示已全部顯示';$('hint9').disabled=true;}};
  $('answer9').onclick=()=>{$('answer9').textContent=$('answerBox9').classList.toggle('show')?'收起參考答案':'我寫好了，查看參考答案';};
  show(1);
})();
