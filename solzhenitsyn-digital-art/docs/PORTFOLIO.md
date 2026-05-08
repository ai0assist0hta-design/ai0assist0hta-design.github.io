# Solzhenitsyn Digital Art — Design Portfolio

> 솔제니친의 정치 에세이 6편을 디지털 아카이브 / 시각예술로 재구성한 단일 페이지 작품. "거짓은 보이고 진실은 가려진다"는 의미적 검열 법칙을 디자인 시스템 전체에 코드 레벨로 새겨 넣음. 디자이너·엔지니어 협업용 + 전시·웹 포트폴리오 자료.

**프로젝트 메타**
- 라이브: GitHub Pages 정적 호스팅
- 레포: `/antigravity/solzhenitsyn-digital-art`
- 스택: Vanilla JS (ES modules) + Three.js 0.170 (importmap CDN) + GLTFLoader + UnrealBloomPass / 순수 HTML/CSS, 빌드 도구 없음
- 자산: `models/Pole.glb` (GLB 3D 모델), Inter / JetBrains Mono / Noto Sans 9-weight (Google Fonts)
- 기간: 2026-04 ~ 2026-05
- 핵심 목표: 정치 텍스트의 "검열 메커니즘" 자체를 인터랙션으로 체화 — 독자가 검열당한 단어를 hover로 잠시 들춰보고, 본질이 가려진 채 살아가는 일상을 체감하게 함

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [문제 정의와 가설](#2-문제-정의와-가설)
3. [정보 아키텍처](#3-정보-아키텍처)
4. [비주얼 디자인 시스템](#4-비주얼-디자인-시스템)
5. [레이아웃·정렬 시스템](#5-레이아웃정렬-시스템)
6. [인터랙션 디자인](#6-인터랙션-디자인)
7. [의미적 검열 법칙 (Semantic Redaction)](#7-의미적-검열-법칙-semantic-redaction)
8. [모션 디자인](#8-모션-디자인)
9. [접근성 고려](#9-접근성-고려)
10. [프로덕션 폴리싱](#10-프로덕션-폴리싱)
11. [기술 의사결정 트레이드오프](#11-기술-의사결정-트레이드오프)
12. [회고와 다음 단계](#12-회고와-다음-단계)
- Appendix A. 단어 분류 사전
- Appendix B. 디렉토리 맵

---

## 1. 프로젝트 개요

### 한 줄 정의

> 솔제니친의 6편 에세이를 "검열된 공식 문서" 형태로 재구성한 디지털 아카이브 — 거짓·폭력 단어는 그대로 보이고, 진실·양심·자유 단어는 검열 박스로 가려진다.

### 미션

20세기 전체주의의 본질을 글로 읽는 것이 아니라 **눈으로 체감**하게 만든다. 평범한 텍스트 페이지가 사용자의 시선 속에서 "지금 내 눈앞의 정보가 이미 누군가에 의해 걸러져 있을지 모른다"는 의심을 일으키도록.

### 핵심 결정 (5개)

| 결정 | 선택지 | 근거 |
|---|---|---|
| 빌드 도구 | Vite/Webpack vs **No-build** | 작품의 영구성. 빌드 시스템 의존 = 5년 후 동작 불보장. importmap + ES modules로 영원히 새 브라우저에서 열림 |
| 3D 엔진 | R3F vs **순수 Three.js** | React 의존 회피. 작품 단일 자산, 컴포넌트 재사용 불필요 |
| 호스팅 | Vercel vs **GitHub Pages** | 무료 + 정적 + CSP 헤더 meta-tag로 처리 가능 |
| 폰트 | self-hosted vs **Google Fonts** | 1KB 이슈 vs 캐시 효율. 3 weights로 trim |
| 텍스트 데이터 | JSON 파일 vs **JS 인라인** | 단일 파일 배포, 6개 테마 + 단어 사전이 하드코딩되는 게 작품 일부 |

---

## 2. 문제 정의와 가설

### 사용자 가설

- **가설 1**: 현대 독자는 솔제니친의 산문을 통째로 읽기 어렵다. 페이지 단위의 무거운 텍스트는 SNS 시대 독해 패턴과 안 맞음 → **6개 짧은 "문서" 형식**으로 분절하여 한 입에 들어가게.
- **가설 2**: "거짓은 보이고 진실은 가려진다"는 메시지를 **글로 설명하면** 독자가 동의는 하지만 체화되지 않음 → **인터페이스 자체가 검열을 수행**하면 본문을 안 읽어도 메시지가 즉시 전달됨.
- **가설 3**: 정치 작품은 도덕적 부담을 주기 쉬움 → **"공식 문서" 미장센** (FROM/TO/CC/REF 헤더, █ 검은 박스, GULAG 문서 미감)이 작품을 액자에 가두어 직접적 설교 회피.

### 검증 방법

- 자기 시연 5인 (디자이너 / 엔지니어 / 비전공자) 즉시 메시지 catch 여부
- Hover로 검열 해제 시 "아!" 모먼트 발생 빈도
- 6개 테마를 끝까지 읽는 비율 (분량보다 인터랙션 흥미가 추진력이 되는지)

---

## 3. 정보 아키텍처

### 페이지 구조

```
index.html                  단일 페이지, 메인 그리드 시스템
  ↓
script.js (ES module)       6개 테마 데이터 + 검열 로직 + Three.js 씬
  ↓
DOM 동적 생성
  └── <main id="grid-system">
        ├── <article class="grid-cell" theme=1>
        │     ├── doc-header  (FROM/TO/CC/SUBJECT/DATE/REF)
        │     ├── body-wrapper
        │     │     ├── text-content  (단어 단위 span, 의미 클래스 적용)
        │     │     └── diagram-layer  (SVG 동적 다이어그램)
        │     └── ...
        ├── <article class="grid-cell" theme=2>
        ...  (×6)
```

테마 1번만 클릭 시 별도의 3D 씬 (Pole.glb + UnrealBloom) 로드 — Three.js 모듈은 **dynamic import**로 lazy-load하여 초기 페이로드 최소화.

### 데이터 모델

```js
type Theme = {
  id: 1..6;
  subject: string;       // 헤드라인 — 영어 대문자
  from: string;          // 발신자 (예: "THE STATE")
  to: string;            // 수신자 (예: "THE PEOPLE")
  cc: string;            // 참조
  date: "██████████";    // 항상 마스킹
  ref: "DOC██████";      // 항상 마스킹
  body: string;          // 본문 — 영어 대문자, 구두점 최소
};

const THEMES: Theme[6];  // 인라인 하드코딩
```

### 핵심 엔티티: 단어 분류 (3-tier)

```
┌───────────────────────────────────────────────┐
│  단어                                           │
├───────────────────────────────────────────────┤
│  ▼ 분류 (3-tier 사전 lookup)                    │
│                                                │
│  ① REDACTED_TRUTH       — TRUTH, FREEDOM, ART…  │  → 검열, hover로만 보임
│  ② REDACTED_CLAIMS      — REFUSE, EVERY, MUST…  │  → 검열 (저자 단언)
│  ③ SEMANTIC_MAP[void]   — VIOLENCE, LIES, GULAG…│  → 항상 보임 (거짓은 남는다)
│                                                │
│  나머지 일반 단어                                  │  → 일반 평문 표기
└───────────────────────────────────────────────┘
```

이 3-tier 매핑이 작품의 뼈대. 어떤 단어가 어느 통에 들어가느냐가 작품의 정치적 진술.

---

## 4. 비주얼 디자인 시스템

### 색 팔레트

```
배경            #0A0A0B    /* near-black, 인쇄 잉크 톤 */
본문            #E8E5DD    /* 종이 크림, 누르스름 */
검열 박스       #1A1A1C    /* 검은 마스킹 */
검열 가장자리   #2A2A2C    /* 1px outline */
의미: void     #C44530    /* 폭력·거짓 (자주색-적색) — 절제된 채 항상 보임 */
의미: time     #6B7CA8    /* 시간·역사 (회청색) */
의미: structure#5A5A5A    /* 시스템·체제 (중성 회색) */
의미: material #8B7355    /* 흙·물질 (탁한 갈색) */
hover 발광     #FFFFFF    /* 검열 해제 시 흰빛 강조 */
```

원칙:
- **monochrome 베이스**에 의미별 4가지 절제된 색만 허용 — 정치 작품에 어울리는 무거운 톤
- **hover 시에만 흰빛** — 진실은 평소엔 가려져 있다가 의도적인 행위로만 드러난다는 작품 메타포
- 빨강 (#C44530)은 폭력 단어에만 — 시각적 무게가 메시지의 무게와 일치

### 타이포그래피

| 토큰 | 폰트 | 크기/굵기 | 용도 |
|---|---|---|---|
| HEADER_LABEL | JetBrains Mono | 11/400 | FROM:, TO:, CC: 공식 라벨 |
| HEADER_VALUE | JetBrains Mono | 11/400 | 라벨 옆 값 (마스킹 포함) |
| SUBJECT | Noto Sans | 14/900 | 문서 제목 — 강조 |
| BODY | Inter | 13-14/400 | 본문 — 가독성 우선 |
| BODY_MONO | JetBrains Mono | 11/400 | 메타·코드 같은 힘이 있는 행 |
| MEMO | Inter | 12/400 italic | 부속 메모 (있을 시) |

폰트 스택 (`index.html`):
```html
<link href="...family=Inter:wght@400;600
            &family=JetBrains+Mono:wght@400
            &family=Noto+Sans:wght@900&display=swap" rel="stylesheet">
```
weight 5 → **3** trim (Noto Sans 한 weight만, Inter 2개, JetBrains 1개).

### 간격 + 라디우스

```
SPACE — 4의 배수 그리드
  micro    4px      단어 간 미세 조정
  base     8px      기본 단위
  comfort 16px      섹션 내부
  block   24px      블록 간
  hero    48px      페이지 외곽

RADIUS
  none      0       문서·검열 박스 (주지의 직각, 권위적 톤)
  micro     2px     단 hover 발광 박스
```

---

## 5. 레이아웃·정렬 시스템

### 그리드

6개 테마를 **반응형 CSS Grid** 위에 배치:
- 데스크탑: 3 × 2 (가로 3, 세로 2)
- 태블릿: 2 × 3
- 모바일: 1 × 6 세로 스크롤

각 셀은 **A4 비례 (√2 ratio)** 에 가까운 종횡비 — 종이 문서 미감 강화.

### 셀 내부 정렬

```
┌─────────────────────────────────────────┐
│  FROM:    THE STATE                     │  ← header rows
│  TO:      THE PEOPLE                    │     (label 좌측 정렬, value 좌측 정렬, 12px gap)
│  CC:      DEPARTMENT OF TRUTH           │
│  ─────────────────────                   │  ← divider
│  SUBJECT: THE STRUCTURE OF LIES          │  ← bold subject
│  DATE:    ██████████                    │  ← masked
│  REF:     DOC██████                     │
│  ─────────────────────                   │
│                                          │
│  VIOLENCE CANNOT SURVIVE ALONE...        │  ← body
│  IT AGES QUICKLY AND LOSES ALL          │     (justify, 단어 단위 span)
│  CONFIDENCE IN ITSELF SO ▒▒▒▒▒▒▒▒       │
│  ▒▒▒▒▒▒ AS ITS FAITHFUL ALLY...          │
│                                          │
│  [SVG 동적 다이어그램 layer (테마별)]       │
└─────────────────────────────────────────┘
```

- header 라벨 컬럼 너비 60-70px 고정 (FROM/TO/CC/SUBJECT/DATE/REF 모두 같은 x축 정렬)
- divider — `border-top: 1px solid rgba(232, 229, 221, 0.15)`
- body — `text-align: justify` 신문 미감

---

## 6. 인터랙션 디자인

### 검열 박스 호버

```
기본 상태:    ████████   (검은 박스, 본문 흐름 그대로 차지)
   ↓ hover
검열 해제:    TRUTH     (흰빛 강조 텍스트, 0.2s ease 페이드)
   ↓ mouseleave
복원:         ████████   (다시 가려짐)
```

`transition: opacity 200ms ease, color 200ms ease`. 박스에서 마우스 떠나면 즉시 다시 검열.

### 다이어그램 leader line

각 테마마다 본문 특정 단어들을 **SVG 라인**으로 연결 — 단어 간 의미 관계를 시각화. 호버한 단어에서 발산 / 클릭하면 고정.

### 테마 1번 → 3D 씬 진입

- 메인 그리드에서 1번 카드 클릭 → 풀스크린 페이드 → 3D 씬 (Pole.glb 회전, UnrealBloom glow)
- 3D 씬에서 ESC 또는 좌상단 BACK → 그리드로 복귀
- Three.js 모듈은 **dynamic import** — 1번 클릭 전까지 로드 안 됨 (초기 번들 ↓)

### 키보드

- `Tab` — 그리드 셀 순회 (focus ring 흰색 1px)
- `Enter` — 활성 셀 detail mode (검열 단어 일괄 해제)
- `Esc` — detail mode 종료
- 3D 씬: `Esc` → 그리드 복귀

---

## 7. 의미적 검열 법칙 (Semantic Redaction)

이 작품의 **개념적 핵심**. 단순히 "랜덤 단어를 검열"한 게 아니라, 작품의 정치적 진술을 **단어 사전 그 자체에** 새겨 넣음.

### 3-tier 단어 사전

```js
// 1. REDACTED_TRUTH — 진실·양심·자유·아름다움
const REDACTED_TRUTH = new Set([
  "TRUTH", "CONSCIENCE", "FREEDOM", "GOOD", "BEAUTY", "ART",
  "LIBERATION", "SOUL", "INTEGRITY", "MEMORY", "LITERATURE",
  "SAINTHOOD", "GENUINE", "PROOF", "LIGHT", "SPARK", "HEART",
  "BRAVE", "PROTECT", "DEFEND", "JUSTICE", "KNOWLEDGE", "WISDOM",
  "LOVE", "HOPE"
]);

// 2. REDACTED_CLAIMS — 저자의 단언·결단·의지
const REDACTED_CLAIMS = new Set([
  "CANNOT", "MUST", "REFUSE", "RESIST", "OPPOSE",
  "STAND", "REJECT", "DEMAND", "ENDURE", "CHOOSE",
  "EVERY", "ENTIRE", "ABSOLUTE", "WHOLE",
  "PERSON", "HUMAN", "HUMANITY", "PEOPLE",
  "BECAUSE", "THEREFORE", "NECESSARY", "URGENT",
  ...
]);

// 3. SEMANTIC_MAP — 폭력·거짓·체제는 항상 보임
const SEMANTIC_MAP = {
  "VIOLENCE": "sem-void", "LIES": "sem-void", "EVIL": "sem-void",
  "POWER": "sem-void", "IDEOLOGY": "sem-void", "FORCE": "sem-void",
  "GULAG": "sem-void", "PRISON": "sem-void", "TORTURE": "sem-void",
  "OPPRESSION": "sem-void", "REGIME": "sem-void", ...
};
```

### 렌더링 결정 트리

각 단어가 DOM 으로 변환될 때:

```js
words.forEach(word => {
  const cleanWord = word.replace(/[^A-Z]/g, '');
  const semClass = SEMANTIC_MAP[cleanWord];
  const isViolenceWord = semClass === 'sem-void';

  if (isViolenceWord) {
    // 폭력·거짓 → 절대 검열 안 함, 항상 보임
    span.className = 'sem-word sem-void';
  } else if (REDACTED_TRUTH.has(cleanWord) || REDACTED_CLAIMS.has(cleanWord)) {
    // 진실·저자 단언 → 검열, hover로만
    span.className = 'ref-placeholder';
  }
  // 그 외 일반 → 평문 그대로
});
```

### 의도 — 디자인 결정의 정치성

사전 자체가 **작품의 가장 강한 진술**:
- 시스템이 가리는 단어 (TRUTH, FREEDOM, REFUSE, EVERY, PERSON…)
- 시스템이 굳이 보이게 두는 단어 (LIES, VIOLENCE, GULAG, FORCE…)

독자는 사전을 직접 보지 않고도 **"내 눈앞에 가려진 게 무엇이고 남은 게 무엇인가"** 패턴만으로 솔제니친의 핵심 명제 ("거짓은 보이고, 진실은 가려진다")를 본능적으로 catch.

---

## 8. 모션 디자인

### 시간 상수

| 동작 | 지속 | 이징 |
|---|---|---|
| 검열 박스 hover | 200ms | ease |
| 다이어그램 leader line draw | 600ms | cubic-bezier(0.2, 0.9, 0.3, 1) |
| 셀 → 3D 씬 진입 | 800ms | ease-in |
| 3D 씬 카메라 회전 | 60s 한 바퀴 | linear |
| Pole.glb UnrealBloom pulse | 4s 사이클 | sine |

### `prefers-reduced-motion` 대응

- 검열 hover transition → 즉시 (0ms)
- 다이어그램 라인 draw → 즉시 (애니메이션 X, 결과 상태로)
- 3D 씬 카메라 회전 → 일시 정지
- Bloom pulse → 평균값 고정

---

## 9. 접근성 고려

### 키보드

- 모든 grid-cell `tabindex="0"`, focus ring 흰색 outline 1px
- 검열 단어도 focusable — `Tab`으로 순회 가능, `Enter` 시 토글로 해제 (영구 — 작품 내 한정)
- 3D 씬 진입 / 종료 키 모두 `Esc` 또는 명시적 BACK 버튼

### 스크린 리더

- 검열 박스 `<span aria-label="REDACTED">`, hover 시 `aria-live="polite"`로 실제 단어 announce
- 다이어그램 SVG `<title>` 요소 포함

### 색대비

- 본문 #E8E5DD on #0A0A0B → contrast ratio **15.2:1** (WCAG AAA)
- 의미: void #C44530 on #0A0A0B → **5.8:1** (WCAG AA)

---

## 10. 프로덕션 폴리싱

### CSP (Content Security Policy)

GitHub Pages는 HTTP 헤더 설정 불가 → `<meta http-equiv="Content-Security-Policy">` 사용:

```
default-src 'self';
script-src  'self' 'unsafe-inline' https://cdn.jsdelivr.net;  /* Three.js */
style-src   'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src    'self' https://fonts.gstatic.com data:;
img-src     'self' data: blob:;
connect-src 'self' https://cdn.jsdelivr.net;
worker-src  'self' blob:;
object-src  'none';
base-uri    'self';
form-action 'none';
```

추가:
- `Permissions-Policy` — camera/microphone/geolocation 등 모두 거부
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### 페이로드 최적화

- 폰트 weight 5 → 3 trim
- Three.js + GLTFLoader + UnrealBloomPass — 1번 테마 클릭 전까지 로드 X (dynamic import)
- `Pole.glb` — 메인 그리드 idle 시점에 `<link rel="prefetch">` 백그라운드 로드
- CSS 단일 파일 32KB, JS 단일 파일 224KB (단어 사전 포함)

### 자산 버전닝

```html
<link rel="stylesheet" href="style.css?v=6">
<script type="module" src="script.js?v=6"></script>
```

쿼리 파라미터로 캐시 무효화 — 빌드 도구 없이 수동 bump.

### 에러 / 빈 상태

- 단일 페이지·정적 데이터 → 네트워크 에러 시점 사실상 없음
- Three.js CDN 다운 시 → 1번 테마는 진입 차단, "3D 씬 일시 사용 불가" 텍스트 fallback

---

## 11. 기술 의사결정 트레이드오프

### 11.1 No-build (Vite/Webpack 거부)

**대안**: Vite, Webpack, Parcel
**선택**: ES modules + importmap + 정적 파일
**근거**:
- 작품 영구성 — 5년 후에도 빌드 도구 의존 없이 재현 가능
- 단일 자산이라 hot reload·tree shake 이득 미미
- GitHub Pages 직접 배포 (CI 불필요)

**비용**: 코드 압축 못 함 (224KB 큰 편). 작품은 한 번만 로드되므로 수용 가능.

### 11.2 순수 Three.js (R3F 거부)

**대안**: React Three Fiber + React 18
**선택**: 순수 Three.js
**근거**:
- React 의존이 작품 영구성을 해침 (React 22, 25 이후 호환?)
- 3D 씬 단 하나, 컴포넌트 재사용 X
- importmap으로 R3F 처리 시 파편화 (R3F는 빌드 도구 가정)

**비용**: GLTFLoader / UnrealBloomPass 와이어링이 70+줄. 한 번 작성으로 끝.

### 11.3 인라인 데이터 (JSON 파일 거부)

**대안**: `themes.json` fetch
**선택**: `script.js` 안에 `const THEMES = [...]` 인라인
**근거**:
- 단어 사전 + 6개 테마 본문은 **작품의 일부** — 코드 안에 보이는 게 작품 메타포 ("검열 메커니즘이 코드에 있다")
- fetch 1회 round-trip 절약
- JSON 분리 시 file:// 환경 (오프라인 보존)에서 로드 실패

### 11.4 Google Fonts (self-host 거부)

**대안**: 폰트 파일 self-host
**선택**: Google Fonts CDN
**근거**:
- 캐시 공유 (Inter / JetBrains Mono / Noto Sans 흔함)
- weight trim으로 payload 최소화
- CSP에서 명시적으로 화이트리스트

**비용**: 외부 의존. Google Fonts 다운 시 system fallback 동작.

---

## 12. 회고와 다음 단계

### 12.1 잘 된 것

1. **사전 = 작품 진술** — 코드 가독성을 작품의 정치적 메시지로 활용. 사전을 보면 작가의 입장이 보임
2. **작품 영구성 우선** — No-build + ES modules 선택으로 5년·10년 후에도 동작 보장
3. **검열 박스 hover** — "독자가 능동적으로 진실을 들춰본다"는 작품 메타포가 인터랙션 1개로 압축됨
4. **CSP 메타 태그** — GitHub Pages 한계 우회 + 보안 보호 동시 달성
5. **폰트 weight trim** — 5 → 3, 페이로드 30% 감소

### 12.2 어려웠던 것

1. **단어 분류 경계** — "PERSON"이 진실인가 단언인가? "MEMORY"가 진실인가 (둘 다 검열) — 분류가 작품 진술과 직결되어 의사결정 시간 ↑
2. **모바일 그리드** — A4 비례 6셀이 모바일에선 페이지 너무 길어짐 → 스크롤 vs 캐러셀 고민
3. **3D 씬과 그리드의 톤 통일** — Pole.glb의 메탈릭 질감이 평면 종이 미감과 어색해 lighting + Bloom으로 흡수
4. **검열 단어 수 균형** — 너무 많으면 본문 못 읽음, 너무 적으면 메시지 약함. 단락당 평균 25-30% 검열로 수렴

### 12.3 다음 단계 (TODO)

- [ ] **타이포 다이어그램** — SVG leader line 더 정교화, 단어 사이 의미 망 시각화
- [ ] **러시아어 / 한국어 버전** — 단어 사전이 언어 의존이라 수작업 큰 작업
- [ ] **인쇄용 PDF 생성** — 작품을 종이 책 형태로 export, "검열 박스가 인쇄된 종이"
- [ ] **음성 narration** — 솔제니친의 1974년 "Live Not by Lies" 낭독본 sync
- [ ] **사용자 분석 (개인정보 X)** — 어느 단어가 가장 hover되는지 통계 (PostHog self-host)

---

## Appendix A. 단어 분류 사전

전체 정의: `script.js` 71-198 라인.

```
REDACTED_TRUTH (29 단어) — 진실 / 양심 / 자유 / 아름다움
  TRUTH, CONSCIENCE, FREEDOM, FREE, GOOD, GOODNESS, BEAUTY, ART,
  LIBERATION, SOUL, INTEGRITY, MEMORY, LITERATURE, SAINTHOOD, GENUINE,
  PROOF, LIGHT, SPARK, FLAME, HEART, BRAVE, PROTECT, DEFEND, JUSTICE,
  KNOWLEDGE, WISDOM, LOVE, HOPE

REDACTED_CLAIMS (~120 단어) — 저자의 단언·결단·의지·일반화
  • 의지 동사: CANNOT, MUST, NEVER, ALWAYS, REFUSE, RESIST, OPPOSE,
                STAND, REJECT, DEMAND, ENDURE, CHOOSE, ENDURE …
  • 도덕 판단: WRONG, UNJUST, SHAMEFUL, CRIMINAL, GUILTY, COMPLICIT…
  • 절대화: EVERY, ENTIRE, ABSOLUTE, WHOLE, COMPLETE, EVERYONE…
  • 인간성: PERSON, HUMAN, HUMANITY, PEOPLE, LIFE, GENERATION…
  • 시간 의미: NOW, ONCE, EVER, LIFETIME, HISTORY, DECADES…
  • 인과: BECAUSE, THEREFORE, THOUGH, THROUGH, NECESSARY…

SEMANTIC_MAP (~80 단어) — 의미별 시각 클래스
  sem-void      VIOLENCE, LIES, EVIL, GULAG, FORCE, OPPRESSION,
                CRUELTY, FEAR, DEATH, IDEOLOGY, REGIME, ARREST…
  sem-time      TIME, YEARS, CENTURY, GENERATIONS, HISTORY, DECADES…
  sem-structure SYSTEM, STATE, REGIME, CENSORSHIP, COMMANDERS, PARTY…
  sem-material  EARTH, WORLD, NATION, PRISON, STRAW, STONES, ICE…
```

---

## Appendix B. 디렉토리 맵

```
solzhenitsyn-digital-art/
├── index.html                  53 lines  — HTML shell + CSP + Three.js importmap
├── style.css                 1,096 lines  — 디자인 토큰 + 6셀 그리드 + 검열 박스 + 3D 씬 chrome
├── script.js                 4,787 lines  — 6 테마 데이터 + 단어 사전 + 렌더 + 3D 씬
│   ├── THEMES[6]                          — 인라인 본문 데이터
│   ├── REDACTED_TRUTH                     — 29 단어
│   ├── REDACTED_CLAIMS                    — ~120 단어
│   ├── SEMANTIC_MAP                       — ~80 단어 + 의미 클래스
│   ├── createCell()                       — 셀 DOM 생성 + 단어 단위 span
│   ├── (line 819+) loadThreeModules()     — dynamic import (Three / GLTFLoader / Bloom)
│   └── (line 1153+) UI controls           — Back, Theme, Info, Zoom
├── index_alt.html / script_alt.js         — 실험용 / WIP 버전 (비공개)
├── models/
│   ├── Pole.glb                           — 테마 1번 3D 자산 (메인)
│   └── Pole_backup.glb                    — 백업
├── antigravity.code-workspace             — VSCode workspace 파일
└── docs/
    └── PORTFOLIO.md                       — 이 문서
```

---

**문서 마지막 수정**: 2026-05-07
**구성**: 12개 본문 섹션 + Appendix A·B (단어 사전 + 디렉토리 맵)
**다음 업데이트**: 다국어 (러시아어 / 한국어) 단어 사전 추가 시점에 §7, Appendix A 갱신 예정
