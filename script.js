/* =============================================
   SAHYADRI CRICKET TEAM — script.js
   ============================================= */

const PALETTE = [
    '#f97316', // orange
    '#3b82f6', // blue
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#ef4444', // red
    '#f59e0b', // amber
    '#06b6d4', // cyan
    '#6366f1', // indigo
    '#e11d48', // rose
    '#0ea5e9', // sky
];

/* ---- Real team — 15 players ----
   icon: true = full ICON  |  icon: 'semi' = Semi Icon  |  null = regular
   -------------------------------------------------------------------- */
const PLAYERS = [
  {
    id:1, jersey:7, name:"Anup More", title:"Captain", nickname:null, icon:null, photo:"assets/anup.png",
    role:"All-rounder",
    tagline:"Captain · 105 wickets · Record partnership holder",
    dobDay:5,  dobMonth:3,  dobStr:"March 5",
    batting:"Right-hand bat", bowling:"Right-arm medium",
    matches:35, runs:680, wickets:105, catches:14, color:PALETTE[0],
    bio:"The Captain of Sahyadri Cricket and one of the most complete cricketers in the squad. Anup's 105 wickets make him the second-highest wicket-taker in the team's history — a relentless performer with the ball who never gives up on a partnership. With the bat he holds Sahyadri's greatest partnership record: a blazing 159 runs in just 67 balls alongside Amit 'ABD' Waghchaure, a stand that has gone down in team legend. The quiet force and the steady hand that keeps this side together."
  },
  {
    id:2, jersey:3, name:"Shekhar Patil", title:null, nickname:"Semi Icon", icon:"semi", photo:"assets/shekhar.png",
    role:"WK",
    tagline:"Semi Icon · The Keeper ⭐",
    dobDay:14, dobMonth:8,  dobStr:"August 14",
    batting:"Right-hand bat", bowling:"—",
    matches:38, runs:2428, wickets:null, catches:255, color:PALETTE[1],
    bio:"Behind the stumps like a hawk, Shekhar is the team's Semi Icon and the absolute heartbeat of the dressing room. With 2428 runs he is closing in fast on Dheeraj at the top of the all-time batting charts, and his 255+ dismissals behind the stumps is a record that no one in the squad comes close to matching. His glove work is as sharp as his wit, and he is a genuinely dangerous player at any position. A fan favourite and one of Sahyadri's most irreplaceable cricketers."
  },
  {
    id:3, jersey:11, name:"Amit Waghchaure", title:null, nickname:"ABD", icon:true, photo:"assets/amit-waghchaure.png",
    role:"Batsman",
    tagline:"ABD · The Destroyer 💥 · ICON",
    dobDay:23, dobMonth:6,  dobStr:"June 23",
    batting:"Right-hand bat", bowling:"Right-arm medium",
    matches:40, runs:1982, wickets:null, catches:22, color:PALETTE[2],
    bio:"They call him ABD for a reason. Amit plays shots that no one else dares to attempt — over the keeper, behind square, straight back over the bowler's head, or any direction he pleases. Closing in on 2000 runs at a pace that has left the entire squad in awe, he is Sahyadri's ICON player and the most feared batsman in the region. His blazing 159-run partnership with captain Anup More — forged in just 67 balls — is the highest partnership in Sahyadri's history. Bowling at ABD is simply an opportunity for him to score faster."
  },
  {
    id:4, jersey:9, name:"Pranesh Patil", title:null, nickname:"LHB & RH Bowler", icon:null, photo:"assets/pranesh.png",
    role:"All-rounder",
    tagline:"Left-hand bat · Right-arm bowler",
    dobDay:12, dobMonth:2,  dobStr:"February 12",
    batting:"Left-hand bat", bowling:"Right-arm medium",
    matches:32, runs:540, wickets:35, catches:12, color:PALETTE[3],
    bio:"Pranesh is a rare commodity in any cricket team — a genuine left-handed all-rounder who bowls right-arm. His unconventional approach to the game keeps opposition captains guessing and makes him a match-winning asset in any format. One of the most unpredictable and exciting players in the squad."
  },
  {
    id:5, jersey:5, name:"Dheeraj Ambore", title:null, nickname:"Top Scorer", icon:null, photo:"assets/dheeraj.png",
    role:"Batsman",
    tagline:"Team's All-Time Highest Run Scorer 👑 · 2736 Runs",
    dobDay:8,  dobMonth:10, dobStr:"October 8",
    batting:"Right-hand bat", bowling:"—",
    matches:45, runs:2736, wickets:null, catches:24, color:PALETTE[4],
    bio:"Dheeraj is Sahyadri's premier batsman and the undisputed all-time highest run scorer with an extraordinary 2736 runs — a mountain that the rest of the batting lineup is still climbing. With a classical technique and the patience to construct match-winning innings, he is the backbone of the batting order. He also doubles up as temporary keeper when needed — a man of many talents and the team's most trustworthy scorer. The king of the batting board."
  },
  {
    id:6, jersey:18, name:"Amit Pati", title:null, nickname:"Team's Kohli", icon:null,
    role:"Batsman",
    tagline:"Kohli of the Team 🔥 · Intense Competitor",
    dobDay:5,  dobMonth:11, dobStr:"November 5",
    batting:"Right-hand bat", bowling:"Right-arm medium",
    matches:38, runs:1420, wickets:null, catches:18, color:PALETTE[5],
    bio:"Intense, passionate, and relentlessly competitive — Amit Pati is the Kohli of Sahyadri Cricket. He plays every match like it is a World Cup final, his aggression with the bat matched only by his intensity on the field. A talented batsman who turns up in the biggest moments when the team needs him most."
  },
  {
    id:7, jersey:13, name:"Amar Pawar", title:null, nickname:null, icon:null,
    role:"Bowler",
    tagline:"Bowling Board Leader · 122 Wickets 🎯",
    dobDay:18, dobMonth:4,  dobStr:"April 18",
    batting:"Right-hand bat", bowling:"Right-arm fast-medium",
    matches:35, runs:680, wickets:122, catches:16, color:PALETTE[6],
    bio:"Amar tops the bowling board and it is not close — 122 wickets, the most by any bowler in Sahyadri's history. A relentless wicket-taker who can dismantle any batting lineup, he is the first name on the team sheet whenever there is a match to be won. On top of that, he is a genuinely fine batsman who rarely gets the recognition he deserves. Give this man a ball and the opposition is in trouble. Give him a bat and runs will follow. One of the most gifted all-round cricketers Sahyadri has ever had."
  },
  {
    id:8, jersey:8, name:"Tushar", title:null, nickname:"Gun Fielder", icon:null,
    role:"All-rounder",
    tagline:"Bat · Ball · Gun Fielder ⚡",
    dobDay:22, dobMonth:7,  dobStr:"July 22",
    batting:"Right-hand bat", bowling:"Right-arm medium",
    matches:36, runs:1100, wickets:32, catches:28, color:PALETTE[7],
    bio:"The complete cricketer. Tushar can bat with authority, bowl with skill, and is arguably the best fielder in the squad. His boundary saves have rescued Sahyadri countless times, and his run-outs are the stuff of team legend. If you need one player to win a match off their own brilliance, Tushar is your man."
  },
  {
    id:9, jersey:10, name:"Ashutosh Deshmukh", title:null, nickname:null, icon:null,
    role:"Bowler",
    tagline:"Classic batsman · Wicket-taking bowler",
    dobDay:3,  dobMonth:12, dobStr:"December 3",
    batting:"Right-hand bat", bowling:"Right-arm fast",
    matches:33, runs:720, wickets:65, catches:14, color:PALETTE[8],
    bio:"Ashutosh is a dangerous combination — a great bowler who also bats with genuine class. His fast bowling consistently rattles top-order batsmen, and when he walks in to bat, opposition fielders never quite know what's coming. A true match-winner with either skill and one of the hardest-working players in the team."
  },
  {
    id:10, jersey:14, name:"Vikas Pethkar", title:null, nickname:"Mystery Man", icon:null,
    role:"Batsman",
    tagline:"Great bat · Mystery bowler 🎩",
    dobDay:16, dobMonth:5,  dobStr:"May 16",
    batting:"Right-hand bat", bowling:"Mystery spin",
    matches:34, runs:980, wickets:18, catches:15, color:PALETTE[9],
    bio:"Vikas is Sahyadri's mystery package. His batting is elegant and composed, capable of building match-winning innings from scratch. But it's his bowling that genuinely puzzles opponents — nobody, not even his own teammates, fully knows what he is going to bowl next. The mystery bowler who always keeps everyone guessing."
  },
  {
    id:11, jersey:16, name:"Vikrant Bhagat", title:null, nickname:null, icon:null, photo:"assets/vikrant.png",
    role:"Bowler",
    tagline:"Wicket-taker · Handy lower-order bat",
    dobDay:9,  dobMonth:9,  dobStr:"September 9",
    batting:"Right-hand bat", bowling:"Right-arm fast-medium",
    matches:30, runs:520, wickets:58, catches:11, color:PALETTE[0],
    bio:"Vikrant is a relentless wicket-taker who combines his bowling craft with useful batting contributions down the order. His ability to break partnerships at crucial moments has earned him enormous respect in the Sahyadri dressing room. A fighter who gives everything for the team every time."
  },
  {
    id:12, jersey:1, name:"Atul", title:null, nickname:"360° Star", icon:null,
    role:"Batsman",
    tagline:"Shine of the Team · God of 360° ✨",
    dobDay:26, dobMonth:1,  dobStr:"January 26",
    batting:"Right-hand bat", bowling:"—",
    matches:40, runs:1580, wickets:null, catches:20, color:PALETTE[1],
    bio:"Atul is the shining light at the top of the Sahyadri order. An opener who is equally dangerous on the on-side, off-side, and every degree in between — a true 360-degree player who can score all around the ground at will. When Atul is in full flow, there is no safe area on the field for any bowler or fielder. The team's brightest star at the top."
  },
  {
    id:13, jersey:4, name:"Balaji Musale", title:null, nickname:null, icon:null,
    role:"Batsman",
    tagline:"Elegant stroke-maker",
    dobDay:20, dobMonth:3,  dobStr:"March 20",
    batting:"Right-hand bat", bowling:"—",
    matches:28, runs:780, wickets:null, catches:12, color:PALETTE[2],
    bio:"Balaji is a stylish and dependable batsman who plays with great composure and timing. His ability to construct an innings from scratch and rotate the strike efficiently makes him a valuable asset in the Sahyadri middle order. Cool under pressure and silky to watch when he is in form."
  },
  {
    id:14, jersey:6, name:"Shreenivasan", title:null, nickname:"Ganu", icon:null,
    role:"Bowler",
    tagline:"Ganu · Bowler · Umpire · Sweeper 🎯",
    dobDay:31, dobMonth:8,  dobStr:"August 31",
    batting:"Right-hand bat", bowling:"Right-arm off-break",
    matches:32, runs:150, wickets:62, catches:9, color:PALETTE[3],
    bio:"Known affectionately as Ganu, Shreenivasan is one of the most multi-talented members of Sahyadri Cricket. A wicket-taking bowler, an agile sweeper in the field, and — remarkably — also the team's most respected umpire whenever he is not playing. A true servant of the game who gives everything to the team regardless of which role he takes on."
  },
  {
    id:15, jersey:99, name:"Akash Bhandwalkar", title:null, nickname:"Ek Kavi", icon:null,
    role:"All-rounder",
    tagline:"Ek Kavi 🖊️ · The Team Poet",
    dobDay:29, dobMonth:4,  dobStr:"April 29",
    batting:"Right-hand bat", bowling:"Occasional medium",
    matches:10, runs:45, wickets:3, catches:2, color:PALETTE[4],
    bio:"Known simply as 'Ek Kavi' — the poet of Sahyadri Cricket Team. More at home with words than a willow, Akash brings poetry, passion, and occasional chaos to the playing field. His contributions are best described as poetic in intention and, on a good day, surprisingly not terrible in execution. The soul of the team, even if the stats suggest otherwise. 🖊️"
  },
];

const MONTHS = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];

// ---- Utilities ----
function getInitials(name) { return name.split(' ').map(w => w[0]).join(''); }

function shadeHex(hex, amt) {
    const n = parseInt(hex.replace('#',''), 16);
    const clamp = v => Math.min(255, Math.max(0, v));
    const r = clamp((n >> 16) + amt);
    const g = clamp(((n >> 8) & 0xff) + amt);
    const b = clamp((n & 0xff) + amt);
    return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
}

function roleBadgeClass(role) {
    return {Batsman:'rb-batsman',Bowler:'rb-bowler','All-rounder':'rb-allrounder',WK:'rb-wk'}[role] || 'rb-batsman';
}
function roleLabel(role) { return role === 'WK' ? 'Wicket Keeper' : role; }

// ---- Render Players ----
function renderPlayers(filter = 'all') {
    const grid = document.getElementById('playersGrid');
    grid.innerHTML = '';

    PLAYERS.forEach(p => {
        if (filter !== 'all' && p.role !== filter) return;

        const init = getInitials(p.name);
        const c2   = shadeHex(p.color, -30);

        // Jersey + icon badges on avatar
        const iconBadge = p.icon === true
            ? '<span class="p-badge icon">★ ICON</span>'
            : p.icon === 'semi'
                ? '<span class="p-badge semi-icon">★ SEMI</span>'
                : p.title === 'Captain'
                    ? '<span class="p-badge captain">♛ CAPT</span>'
                    : '';

        // Nickname line under player name
        const nickHtml = p.nickname
            ? `<div class="player-nickname">${p.nickname}</div>`
            : '';

        // Stat line
        const statLine = p.wickets
            ? `<i class="fas fa-fire"></i> ${p.wickets} wickets`
            : p.runs
                ? `<i class="fas fa-chart-line"></i> ${p.runs} runs`
                : `<i class="fas fa-hands"></i> ${p.catches} catches`;

        const card = document.createElement('div');
        card.className = 'player-card' + (p.icon ? ' icon-player' : '');

        const avatarContent = p.photo
            ? `<img src="${p.photo}" alt="${p.name}" class="player-photo">`
            : init;

        card.innerHTML = `
            <div class="player-avatar" style="background:linear-gradient(145deg,${p.color},${c2})">
                ${avatarContent}
                <span class="p-jersey">#${p.jersey}</span>
                ${iconBadge}
            </div>
            <div class="player-info">
                <div class="player-name">${p.name}</div>
                ${nickHtml}
                <span class="role-badge ${roleBadgeClass(p.role)}">${roleLabel(p.role)}</span>
                <div class="player-stat-line">${statLine}</div>
            </div>`;

        card.addEventListener('click', () => openModal(p));
        grid.appendChild(card);
    });

    revealElements(grid.querySelectorAll('.player-card'));
}

// ---- Player Modal ----
function openModal(p) {
    const overlay = document.getElementById('playerModal');
    const body    = document.getElementById('modalBody');
    const c2      = shadeHex(p.color, -35);

    // Always show: Matches | Runs | Wickets or Catches
    const statsHtml = `
        <div class="m-stat"><span class="v">${p.matches}</span><span class="l">Matches</span></div>
        <div class="m-stat"><span class="v">${p.runs ?? '—'}</span><span class="l">Runs</span></div>
        <div class="m-stat"><span class="v">${p.wickets ?? p.catches ?? '—'}</span><span class="l">${p.wickets ? 'Wickets' : p.role === 'WK' ? 'Dismissals' : 'Catches'}</span></div>`;

    const iconLine = p.icon === true
        ? ` &nbsp;<span style="color:var(--gold);font-size:0.75rem">★ ICON</span>`
        : p.icon === 'semi'
            ? ` &nbsp;<span style="color:var(--gold);font-size:0.75rem;opacity:0.8">★ SEMI ICON</span>`
            : p.title === 'Captain'
                ? ` &nbsp;<span style="color:var(--gold);font-size:0.75rem">♛ CAPTAIN</span>`
                : '';

    const nickHtml = p.nickname
        ? `<span style="font-size:0.75rem;color:var(--accent);font-weight:500;margin-left:0.4rem">(${p.nickname})</span>`
        : '';

    const modalHeaderContent = p.photo
        ? `<img src="${p.photo}" alt="${p.name}" class="m-photo">`
        : getInitials(p.name);

    body.innerHTML = `
        <div class="m-header" style="background:linear-gradient(145deg,${p.color},${c2})">
            ${modalHeaderContent}
            <span class="m-jersey-big">#${p.jersey}</span>
        </div>
        <div class="m-body">
            <div class="m-name">${p.name}${nickHtml}${iconLine}</div>
            <div class="m-role">${roleLabel(p.role)}</div>
            <div class="m-tagline">${p.tagline}</div>
            <div class="m-stats">${statsHtml}</div>
            <div class="m-details">
                <div>
                    <div class="m-detail-label">Birthday</div>
                    <div class="m-detail-value">${p.dobStr}</div>
                </div>
                <div>
                    <div class="m-detail-label">Jersey No.</div>
                    <div class="m-detail-value">#${p.jersey}</div>
                </div>
                <div>
                    <div class="m-detail-label">Batting</div>
                    <div class="m-detail-value">${p.batting}</div>
                </div>
                <div>
                    <div class="m-detail-label">Bowling</div>
                    <div class="m-detail-value">${p.bowling}</div>
                </div>
            </div>
            <div class="m-bio">${p.bio}</div>
        </div>`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('playerModal').classList.remove('open');
    document.body.style.overflow = '';
}

// ---- Render Birthdays ----
function renderBirthdays() {
    const container  = document.getElementById('birthdayContainer');
    const today      = new Date(2026, 3, 29);   // April 29 2026
    const todayDay   = today.getDate();
    const todayMonth = today.getMonth() + 1;

    const byMonth = {};
    PLAYERS.forEach(p => { (byMonth[p.dobMonth] || (byMonth[p.dobMonth] = [])).push(p); });

    // Sort months: current month first, then upcoming, then past
    const sortedMonths = Object.keys(byMonth).map(Number).sort((a,b) => {
        const da = (a - todayMonth + 12) % 12;
        const db = (b - todayMonth + 12) % 12;
        return da !== db ? da - db : a - b;
    });

    const grid = document.createElement('div');
    grid.className = 'bday-months-grid';

    sortedMonths.forEach(month => {
        const players   = byMonth[month].sort((a,b) => a.dobDay - b.dobDay);
        const isCurrent = (month === todayMonth);

        const card = document.createElement('div');
        card.className = 'bday-month-card';
        card.innerHTML = `
            <div class="bday-month-header">
                <div class="bday-month-icon"><i class="fas fa-cake-candles"></i></div>
                <div>
                    <div class="bday-month-name">${MONTHS[month-1]}</div>
                    <div class="bday-month-count">${players.length} player${players.length > 1 ? 's' : ''}${isCurrent ? ' · 🗓 This Month' : ''}</div>
                </div>
            </div>
            <div class="bday-list" id="bl-${month}"></div>`;

        grid.appendChild(card);
        const listEl = card.querySelector(`#bl-${month}`);

        players.forEach(p => {
            const isToday    = (month === todayMonth && p.dobDay === todayDay);
            const isUpcoming = !isToday && isCurrent && p.dobDay > todayDay;

            const item = document.createElement('div');
            item.className = 'bday-item' + (isToday ? ' is-today' : isUpcoming ? ' is-upcoming' : '');

            const emoji = isToday ? '🎂' : isUpcoming ? '🎁' : '🎈';

            item.innerHTML = `
                <div class="bday-av" style="background:linear-gradient(135deg,${p.color},${shadeHex(p.color,-30)})">${getInitials(p.name)}</div>
                <div class="bday-info">
                    <div class="bn">${p.name}${isToday ? ' 🎉' : ''}</div>
                    <div class="bd"><i class="fas fa-calendar-days" style="font-size:0.67rem"></i> ${p.dobStr}${p.nickname ? ` · ${p.nickname}` : ''}</div>
                </div>
                <span class="bday-emoji">${emoji}</span>`;
            listEl.appendChild(item);
        });
    });

    container.appendChild(grid);
}

// ---- Scroll progress bar ----
function setupScrollBar() {
    const bar = document.getElementById('scrollBar');
    window.addEventListener('scroll', () => {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        bar.style.width = (pct * 100) + '%';
    }, { passive: true });
}

// ---- Back to top ----
function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---- Navbar scroll + active link highlight ----
function setupNavbar() {
    const nav      = document.getElementById('navbar');
    const sections = ['home','about','players','moments','birthdays'];
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
        const scrollY = window.scrollY + 120;
        let active = 'home';
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollY) active = id;
        });
        document.querySelectorAll('.nav-link').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${active}`);
        });
    }, { passive: true });
}

// ---- Hamburger ----
function setupHamburger() {
    const btn   = document.getElementById('hamburger');
    const links = document.getElementById('navLinks');
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        links.classList.toggle('open');
    });
    links.addEventListener('click', e => {
        if (e.target.classList.contains('nav-link')) {
            btn.classList.remove('open');
            links.classList.remove('open');
        }
    });
}

// ---- Filter buttons ----
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPlayers(btn.dataset.filter);
        });
    });
}

// ---- Modal close ----
function setupModal() {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('playerModal').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ---- Stats counter animation ----
function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const step   = Math.max(1, Math.ceil(target / 55));
        let val = 0;
        const tick = () => {
            val = Math.min(val + step, target);
            el.textContent = val;
            if (val < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });
}

function setupCounterObserver() {
    const hero = document.querySelector('.hero-stats');
    if (!hero) return;
    let fired = false;
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !fired) { fired = true; animateCounters(); }
    }, { threshold: 0.4 }).observe(hero);
}

// ---- Scroll reveal ----
function revealElements(nodeList) {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity   = '1';
                e.target.style.transform = e.target.style.transform.replace('translateY(24px)', 'translateY(0)');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });

    nodeList.forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = (el.style.transform || '') + ' translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        obs.observe(el);
    });
}

function setupScrollReveal() {
    const targets = document.querySelectorAll('.highlight, .news-card, .gallery-item, .bday-month-card');
    revealElements(targets);
}

// ---- Init ----
function init() {
    renderPlayers();
    renderBirthdays();
    setupNavbar();
    setupHamburger();
    setupFilters();
    setupModal();
    setupCounterObserver();
    setupScrollBar();
    setupBackToTop();
    setTimeout(setupScrollReveal, 120);
}

document.addEventListener('DOMContentLoaded', init);
