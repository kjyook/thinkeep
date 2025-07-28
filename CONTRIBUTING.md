# 🤝 Contributing Guide

환영합니다! 이 문서는 본 프로젝트에 기여할 때 따라야 하는 규칙들을 설명합니다.  
모든 팀원은 일관된 협업을 위해 아래의 규칙을 준수해주세요.

---

## 🚀 브랜치 전략

### 📌 브랜치 역할

| 브랜치                          | 설명                                                                |
| ------------------------------- | ------------------------------------------------------------------- |
| `main`                          | 실제 운영(배포)용 브랜치입니다. **직접 푸시 금지**                  |
| `dev`                           | 개발 완료된 기능이 머지되는 통합 브랜치입니다                       |
| `feat/*`, `fix/*`, `refactor/*` | 기능/버그/리팩토링 작업 브랜치입니다. 완료 후 `dev`로 PR을 보냅니다 |

### ✅ 브랜치 작업 흐름

```mermaid
graph TD;
  FEAT[기능 브랜치 (feat/*)] --> DEV[dev 브랜치];
  DEV --> MAIN[main 브랜치];
```

---

## 📂 폴더 구조 및 코드 컨벤션

### 📁 폴더 구조

```
/src
	/app          // Next.js 라우트 페이지
		/page.tsx     // 루트 페이지
		/layout.tsx   // 공통 레이아웃
		/[segment].tsx  // route segment page
		/api          // api route(edge/server function)
  /components     // 재사용 가능한 컴포넌트
    /ui              // 공통 UI 요소 (Button 등)
      /Button.tsx
    /layout             // Header, Footer, Sidebar 등
    /form               // Input, Select, FormField 등
    /sections           // 특정 페이지용 섹션 조각들 (예: Hero, FAQSection)
    /page               // page 전용 (특정 page.tsx에서만 쓰는 컴포넌트)

  /features           // 도메인 별 기능 단위 (폴더 기준 분리)
  /hooks              // 커스텀 훅
  /utils              // 공통 유틸 함수
  /types              // 전역 타입 정의
  /styles             // 전역 스타일 (Tailwind, SCSS 등)
  /lib                // 외부 API, 데이터 처리 모듈
/public               // 정적 파일
```

---

### 🧱 컴포넌트 컨벤션

- **파일명**: PascalCase (`UserCard.tsx`)
- **컴포넌트명**: PascalCase (`function UserCard()`)
- **Props 인터페이스명**: `컴포넌트명Props` (`UserCardProps`)
- **기능 단위로 폴더로 묶기**

  ```bash
  /user-card
    user-card.tsx
    user-card.module.css
    index.ts

  ```

---

### 🧾 코드 스타일

- **세미콜론 사용**: 항상 붙임
- **탭 너비**: 2 spaces
- **문자열**: 따옴표는 `'single quotes'`
- **import 순서**:

  ```
  1. 외부 라이브러리
  2. 절대경로 import (@로 시작 등)
  3. 상대경로 import (./, ../ 등)

  ```

---

### 🧠 네이밍 컨벤션

| 타입              | 형식        | 예시                |
| ----------------- | ----------- | ------------------- |
| 변수명            | camelCase   | `userName`, `count` |
| 함수명            | camelCase   | `getUserData()`     |
| 컴포넌트명        | PascalCase  | `UserCard`          |
| 타입/인터페이스명 | PascalCase  | `User`, `UserProps` |
| 파일/폴더명       | kebab-case  | `user-card.tsx`     |
| 상수              | UPPER_SNAKE | `MAX_RETRY_COUNT`   |

---

## 🔀 Git 컨벤션

### ✔️ 브랜치 명

- 기능 추가: `feat/login-page`
- 버그 수정: `fix/modal-close`
- 문서 수정: `docs/readme`
- 리팩토링: `refactor/user-hook`
- UI/UX 개선: `ui/button-style`
- 기타 작업: `chore/prettier`, `refactor/user-hook`

### ✔️ 커밋 메시지

```
<타입>: <변경 요약>

[선택] 본문 설명
[선택] 이슈번호

```

#### 주요 커밋 타입

| 타입     | 설명                      |
| -------- | ------------------------- |
| feat     | 새로운 기능 추가          |
| fix      | 버그 수정                 |
| refactor | 코드 리팩토링             |
| chore    | 빌드 설정, 패키지 설치 등 |
| docs     | 문서 수정                 |
| test     | 테스트 코드 관련          |
| style    | 스타일 수정 (prettier 등) |

#### 예시

```bash
feat: 로그인 페이지 UI 구현

fix: 모달 닫기 동작이 작동하지 않던 문제 수정

```

---

### 🙏 Pull Request 가이드

PR 제목: 간결하게 기능/버그 내용 명시

본문에 구현 내용 및 스크린샷 (필요시)

Reviewer 지정

## 본인의 PR은 직접 머지하지 않기

## 🔧 린트 & 포맷터 설정

- **ESLint** + **Prettier** 사용 권장
- `eslint-config-next` 또는 `airbnb` 스타일 적용
- `.prettierrc` 예시:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

---

### 🛡️ 타입스크립트 설정

- `strict` 모드 활성화
- 모든 컴포넌트/함수는 타입 명시
- 가능한 경우 `unknown` 대신 `never`, `Record<string, unknown>` 사용

---
